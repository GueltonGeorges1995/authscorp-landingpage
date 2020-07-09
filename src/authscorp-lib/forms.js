import axios from 'axios'

var Forms = {
    request(method, url, data) {
        return axios({
            method,
            url,
            data,
            headers: {
                accept: 'application/json'
            }
        }).then((e) => {
            if(e.data.error)
                throw(e.data)
            return e
        });
    },
    trigger(elm, eventName, data) {
        try {
            // Camelcase & SnakCase sending trigger
            var secondName = eventName.replace(/-\S*/g, function(txt){ return txt.charAt(1).toUpperCase() + txt.substr(2).toLowerCase();});
            if(secondName !== eventName)
                if(!this.trigger(elm, secondName, data))
                    return false;

            // Create vent object
            var event; // The custom event that will be created
            if (document.createEvent) {
                event = document.createEvent("HTMLEvents");
                event.initEvent(eventName, true, true);
            } else {
                event = document.createEventObject();
                event.eventType = eventName;
            }

            event.eventName = eventName;
            for(var key in data)
                event[key] = data[key];

            if (document.createEvent)
                elm.dispatchEvent(event);
            else
                elm.fireEvent("on" + event.eventType, event);

            if(event.defaultPrevented)
                return false;
        } catch(e) {
            console.error(e);
        }

        return true;
    },
    serialize(elm) {
        if(elm.querySelector('input[type="file"]:not([disabled])')) {
            elm.setAttribute && elm.setAttribute('enctype', 'multipart/form-data');
            elm.attr && elm.attr('enctype', 'multipart/form-data');
            return new FormData(elm);
        } else {
            elm.setAttribute && elm.setAttribute('enctype', 'application/json');
            elm.attr && elm.attr('enctype', 'application/json');
            var data = serializeArray(elm);
            var o = {};
            for (var k in data) {
                var d = data[k];
                if (o[d.name] !== undefined) {
                    if (!o[d.name].push) {
                        o[d.name] = [o[d.name]];
                    }
                    o[d.name].push(d.value || '');
                } else {
                    o[d.name] = d.value || '';
                }
            }

            return JSON.parse(JSON.stringify(o));
        }
    },
    submit(elm) {
        var method = (elm.getAttribute('method') || 'POST').toUpperCase();
        var api    = elm.getAttribute('action');
        var data   = Forms.serialize(elm);

        if(!Forms.trigger(elm, 'api-prepare', { api: api, data, method }))
            return { defaultPrevented: true }

        // Execute http call
        return Forms.request(method, api, data).then((res) => {
            var result = res.data;
            if(elm.getAttribute('novalidate') === undefined)
                result = JSON.parse(result);

            if(Forms.trigger(elm, 'api-success', { api: api, result: result }) && result.Location)
                location.href = result.Location

            return res;
        }).catch((err) => {
            var error = (err.response && err.response.data) || err.error || err.message || err
            error = error.error || error
            if(Forms.trigger(elm, 'api-error', { api: api, result: err, error }))
                console.error({ api: api, error, result: err })

            return err;
        }).then((res) => {
            Forms.trigger(elm, 'api-done', res);
        }).catch(console.error);
    },
    onSubmit(e) {
        var elm = e.target;
        if(!elm || (elm.tagName && String(elm.tagName).toLowerCase() !== 'form') || !elm.getAttribute('action') || e.defaultPrevented || !elm.hasAttribute('authscorp'))
            return false

        e.preventDefault()
        return Forms.submit(elm)
    },
    init() {
        // Auto intercept forms
        if(typeof(document) === "undefined" || typeof(document.querySelectorAll) === "undefined")
            return
    
        document.addEventListener('submit', Forms.onSubmit)
    }
}

export default Forms

// --------------------------------

function serializeArray(form) {  
    var objects = [];  
    if (typeof form == 'object' && String(form.nodeName).toLowerCase() == "form") {  
      var fields = form.getElementsByTagName("input")
      for (var i=0;i<fields.length;i++) {
        let value = fields[i].getAttribute("value")
        if (!value && typeof fields[i].value !== 'undefined') {
          value = fields[i].value;
        }
        objects[objects.length] = { name: fields[i].getAttribute("name"), value }
      }
      var textfields = form.getElementsByTagName("textarea")
      for (var t=0;t<textfields.length;t++) {
        let value = textfields[t].getAttribute("value")
        if (!value && typeof textfields[t].value !== 'undefined') {
          value = textfields[t].value;
        }
        objects[objects.length] = { name: textfields[t].getAttribute("name"), value }; 
      }
    }
    return objects
}