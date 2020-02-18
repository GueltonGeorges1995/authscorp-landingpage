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
                <v-col md="3" id="node1">
                    <h3>2019 Q1</h3>  
                    <h3>Nodes Alpha</h3>
                </v-col>
                <v-col md="3" id="node2">
                    <h3>2019 Q1</h3>
                    <h3>Used Alpha</h3>
                </v-col>
                <v-col md="3" id="node3">
                    <h3>2019 Q1</h3>  
                    <h3>Network Beta</h3>
                </v-col>
                <v-col md="3" id="node4">
                    <h3>2019 Q1</h3>  
                    <h3>Partner Connection</h3>
                </v-col>
            </v-row>
            <v-row style="margin: 30px 0; position: relative;">
                <v-col md="12">
                    <v-progress-linear
                        value="27"
                        color="#FFFFFF"
                        height="2px"
                        buffer-value="93"
                    ></v-progress-linear>
                    <div class="dot-active"></div>
                    <div class="dot-active" style="left: 27%;">
                        <div id="dot-current"></div>
                        <div id="dot-in-current"></div>
                    </div>
                    <div class="dot-active" style="right: 47%; background: #4b6fff;"></div>
                    <div class="dot-active" style="right: 21%; background: #4b6fff;"></div>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="3" id="details">
                    <div class="rectangle"></div>
                    <div id="bg">
                        <p id="a">...</p>
                    </div>
                </v-col>
                <v-col md="3" id="details2">
                    <div class="rectangle"></div>
                    <div id="bg2">
                        <p id="a2">...</p>
                    </div>
                </v-col>
                <v-col md="3" id="details3">
                    <div class="rectangle box"></div>
                    <div id="bg3"></div>
                </v-col>
                <v-col md="3" id="details3">
                    <div class="rectangle box"></div>
                    <div id="bg3"></div>
                </v-col>
            </v-row>
            <v-row>
                <div id="follow">
                    <p>Follow our progress on and plans on our <a href="">public roadmap</a>.</p>
                </div>
            </v-row>
        </v-container>
        <div id="abstract-1">
            <div id="rectangleC"></div>
            <div id="rectangleC" style="top: -35%;"></div>
            <!-- <div id="polygon"></div> -->
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
    @import url('https://www.fontify.me/wf/7116669ff62ea6ce905b50766eaca6b8');

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
        font-family: Lato;
        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
    }
   
    h2 {
        width: 510px;
        height: 61px;
        font-family: Lato;
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
        font-family: Lato;
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
        font-family: Lato;
        font-size: 16px;
        font-weight: 700;
        line-height: 30px;
    }

    #a2 {
        height: 43.06px;
        line-height: 32px;
    }

    .rectangle {
        width: 14.15px;
        height: 14.15px;
        border-radius: 2px;
        position: absolute;
        top: 5%;
        left: 10%;
        background: #ffffff;
        transform: rotate(45.00001deg);
    }

    .box {
        background-color: rgba(255,255,255,0.1);
    }

    #follow {
        margin: 0 auto;
        padding: 50px 0;
        width: 303.51px;
        height: 46px;
        /* font-family: "SFUIDisplay-Regular"; */
        font-family: font92731;
        font-size: 19px;
        font-weight: 400;
        line-height: 23px;
        text-align: center;
    }

    a {
        color: #ff9c36;
    }

    /** Polygons */
    #abstract-1 {
        z-index: 4;
        width: 624.06px;
        height: 750.27px;
    }

    #polygon {
        z-index: 5;
        width: 461.83px;
        height: 462.01px;
        position: absolute;
        top: -22%;
        left: -15%;
        background: linear-gradient(270deg, rgba(0,255,255,0.07));
    }

    #rectangleC {
        z-index: 5;
        width: 313.83px;
        height: 513px;
        position: absolute;
        top: -50%;
        left: -10%;
        border-radius: 45%;
        background: linear-gradient(180deg, rgba(0,255,255,0.07));
        transform: rotate(45.00001deg);
    }

</style>