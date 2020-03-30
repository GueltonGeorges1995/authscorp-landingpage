#!/bin/bash
clear

namespace=default
name=authscorp-landing

# -----

registry=registry.authscorp.com/$name:v

function increment_version() {
 local v=$1
 if [ -z $2 ]; then 
    local rgx='^((?:[0-9]+\.)*)([0-9]+)($)'
 else 
    local rgx='^((?:[0-9]+\.){'$(($2-1))'})([0-9]+)(\.|$)'
    for (( p=`grep -o "\."<<<".$v"|wc -l`; p<$2; p++)); do 
       v+=.0; done; fi
 val=`echo -e "$v" | perl -pe 's/^.*'$rgx'.*$/$2/'`
 echo "$v" | perl -pe s/$rgx.*$'/${1}'`printf %0${#val}s $(($val+1))`/
}

function actual_version() {
   name=$(kubectl get deployment $name --namespace=$namespace -o=jsonpath='{.spec.template.spec.containers[0].image}')
   echo ${name:${#registry}}
}

version=$(increment_version $(actual_version))
registry=$registry$version
echo "building image "$registry

if [ "$1" != "--nobuild" ]; then
   npm run build || exit 1
fi

docker build . -t $registry && \
docker push $registry && \
kubectl set image deployment/$name --namespace=$namespace $name=$registry && \
echo "" && \
echo "updated image on server, deployment done"