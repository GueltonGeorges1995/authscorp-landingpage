<template>
    <section>
        <v-container>
            <v-row id="title" justify="center">
                <div style="margin: 0 auto;">
                    <v-chip color="rgba(255,255,255,0.05)" id="pill">
                        Roadmap
                    </v-chip>
                </div>
                <h2>Artificial Intelligence</h2>
            </v-row>
        </v-container>
        <v-container id="content">
            <v-row>
                <v-col cols="3" id="node1">
                    <h3>2019 Q1</h3>  
                    <h3>Nodes Alpha</h3>
                </v-col>
                <v-col cols="3" id="node2">
                    <h3>2019 Q1</h3>
                    <h3>Used Alpha</h3>
                </v-col>
                <v-col cols="3" id="node3">
                    <h3>2019 Q1</h3>  
                    <h3>Network Beta</h3>
                </v-col>
                <v-col cols="3" id="node4">
                    <h3>2019 Q1</h3>  
                    <h3>Partner Connection</h3>
                </v-col>
            </v-row>
            <v-row style="margin: 30px 0; position: relative;">
                <v-col cols="12">
                    <v-progress-linear
                        value="27"
                        color="#FFFFFF"
                        height="2px"
                    ></v-progress-linear>
                    <div class="dot-active"></div>
                    <div class="dot-active" style="left: 27%;">
                        <div id="dot-current"></div>
                        <div id="dot-in-current"></div>
                    </div>
                    <div class="dot-active" id="network"></div>
                    <div class="dot-active" id="partner"></div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3" id="details">
                    <div id="bg" class="bulle">
                        <p id="a">...</p>
                    </div>
                </v-col>
                <v-col cols="3" id="details2">
                    <div id="bg2" class="bulle">
                        <p id="a2">...</p>
                    </div>
                </v-col>
                <v-col cols="3" id="details3">
                    <div id="bg3" class="bulle invisible"></div>
                </v-col>
                <v-col cols="3" id="details3">
                    <div id="bg3" class="bulle invisible"></div>
                </v-col>
            </v-row>
            <v-row>
                <div id="follow">
                    <p>Follow our progress on and plans on our <a href="" style="color: #ff9c36;">public roadmap</a>.</p>
                </div>
            </v-row>
        </v-container>
        <div id="abstract-1">
            <div class="rectangleC"></div>
            <div class="rectangleC" style="top: -35%;"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Roadmap'
}
</script>

<style scoped>
    @import url('https://fonts.google.com/specimen/Lato?selection.family=Lato');

    @font-face {
        font-family: 'sf_ui_displayregular';
        src: url('../../../assets/fonts/sf-ui-display-regular-webfont.woff2') format('woff2'),
             url('../../../assets/fonts/sf-ui-display-regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    section {
        height: 100vh;
        background: #264EEE;
        color: white;
        position: relative;
    }

    #title {
        height: 121.69px;
        width: 510px;
        margin: 0 auto;
        padding: 70px 0;
    }

    #pill {
        height: 41.59px;
        margin-bottom: 20px;
        color: #ffffff;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
    }
   
    h2 {
        width: 510px;
        height: 61px;
        font-size: 48px;
        font-weight: 700;
        line-height: 61px;
        text-align: center;
    }

    #content {
        height: 334px;
        padding: 60px 0;
    }

    #node1, #node2, #node3, #node4 {
        height: 80px;
        color: #ffffff;
        font-size: 18px;
        font-weight: 700;
        line-height: 40px;
    }

    #node1 {
        width: 182px;
    }

    #node2 {
        width: 140px;
    }

    #node3 {
        width: 143px;
        color: rgba(255,255,255,0.1);
    }

    #node4 {
        width: 213px;
        color: rgba(255,255,255,0.1);
    }

    /**Checkpoints */

    .dot-active {
        width: 12px;
        height: 12px;
        background: #ffffff;
        position: absolute;
        top: 30%;
        border-radius: 50%;
    }

    #dot-current {
        width: 9px;
        height: 9px;
        background: #264EEE;
        position: absolute;
        top: 13%;
        left: 14%;
        border-radius: 50%;
    }

    #dot-in-current {
        width: 5px;
        height: 5px;
        background: #FFFFFF;
        position: absolute;
        top: 28%;
        left: 30%;
        border-radius: 50%;
    }

    #network {
        right: 47%; 
        background: #4b6fff;
    }

    #partner {
        right: 21%; 
        background: #4b6fff;
    }

    /**Boxes */

    #details {
        width: 196.99px;
        height: 116.69px;
        position: relative;
    }

    #details2 {
        width: 197px;
        height: 95px;
        position: relative;
    }

    #details3 {
        width: 197px;
        height: 139px;
        position: relative;
    }

    #bg, #bg2, #bg3 {
        width: 196.99px;
        height: 109.48px;
        background: #ffffff;
        border-radius: 5px;
        box-shadow: 0px 3px24px rgba(0,0,0,0.07);
    }

    .bulle:before {
        content: "";
        width: 0;
        height: 0;
        left: 8%;
        top: 0%;
        position: absolute;
        border-bottom: 12px solid white;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }

    .invisible:before {
        border-bottom: 12px solid rgba(255,255,255,0.1);
    }

    #bg2 {
        height: 86.86px;
    }

    #bg3 {
        width: 196.99px;
        height: 131.38px;
        background-color: rgba(255,255,255,0.1);
    }

    #a, #a2 {
        padding: 10px 15px;
        width: 164.89px;
        height: 64.96px;
        color: #313236;
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
    }

    #a2 {
        height: 43.06px;
        line-height: 32px;
    }

    #follow {
        margin: 0 auto;
        padding: 50px 0;
        width: 303.51px;
        height: 46px;
        font-family: 'sf_ui_displayregular';
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
        text-align: center;
    }

    /** Polygons */

    .rectangleC {
        width: 313.83px;
        height: 513px;
        position: absolute;
        top: -50%;
        left: -10%;
        border-radius: 45%;
        background: linear-gradient(180deg, rgba(0,255,255,0.07));
        transform: rotate(45.00001deg);
    }

    /** Mediaqueries */

    @media screen and (min-width: 240px) and (max-width: 350px) {
        h2 {
            font-size: initial;
        }

        #title {
            width: initial;
        }

        #node1, #node2, #node3, #node4 {
            height: 100px;
            font-size: 7.5px;
        }

        #bg, #bg2, #bg3 {
            width: 60px;
            height: 109.48px;
        }

        .bulle {
            left: 25%;
        }

        #network {
            right: 40%;
        }

        #partner {
            right: 12%;
        }

        #follow {
            padding: 10px 0;
        }

        #content {
            padding: 60px 29px;
        }
    }

    @media screen and (min-width: 350px) and (max-width: 600px) {
        h2 {
            font-size: 25px;
        }

        #title {
            width: initial;
        }

        #node1, #node2, #node3, #node4 {
            height: 100px;
            font-size: 12px;
        }

        #content {
            padding: 60px 29px;
        }

        #dot-in-current {
            top: 31%;
            left: 29%;
        }

        #follow {
            padding: 10px 0;
        }

        .rectangleC {
            width: 260px;
            height: 390px;
        }
    }

    @media screen and (min-width: 600px) and (max-width: 800px) {
        #node1, #node2, #node3, #node4 {
            height: 100px;
            font-size: 18px;
        }

        #content {
            padding: 60px 29px;
        }

        #bg, #bg2, #bg3 {
            width: 126.99px;
            height: 109.48px;
        }

        .bulle:before {
            left: 10%;
        }

        #network {
            right: 45%;
        }

        #partner {
            right: 19%;
        }

        #follow {
            padding: 10px 0;
        }

        .rectangleC {
            width: 260px;
            height: 390px;
        }
    }

    @media screen and (min-width: 350px) and (max-width: 500px) {
        #bg, #bg2, #bg3 {
            width: 56.99px;
            height: 100.48px;
        }

        .bulle:before {
            left: 22%;
        }

        #network {
            right: 41%;
        }

        #partner {
            right: 14%;
        }
    }

    @media screen and (min-width: 500px) and (max-width: 600px) {
        #bg, #bg2, #bg3 {
            width: 90px;
            height: 100.48px;
        }

        .bulle:before {
            left: 18%;
        }

        #network {
            right: 43%;
        }

        #partner {
            right: 17%;
        }
    }

</style>