<template>
    <section>
        <v-container>
            <v-row id="title" justify="center">
                <div style="margin: 0 auto;">
                    <v-chip color="rgba(255,255,255,0.05)" id="pill">
                        <h5>Roadmap</h5>
                    </v-chip>
                </div>
                <h2>Artificial Intelligence</h2>
            </v-row>
        </v-container>
        <v-container id="content">
            <v-row>
                <v-col md="3" id="node1">
                    <h4>2019 Q1</h4>  
                    <h3>Nodes Alpha</h3>
                </v-col>
                <v-col md="3" id="node2">
                    <h4>2019 Q1</h4>
                    <h3>Used Alpha</h3>
                </v-col>
                <v-col md="3" id="node3"></v-col>
                <v-col md="3" id="node4"></v-col>
            </v-row>
            <v-row id="bar">
                    <v-col md="3">
                        <div id="bar-active"></div>
                    </v-col>
                    <v-col md="9">
                        <div id="bar-inactive"></div>
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
                    <div class="box rectangle"></div>
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
        <!-- <div id="abstract-1">
            <div id="rectangleC"></div>
            <div id="rectangleC"></div>
            <div id="polygon"></div>
        </div> -->
    </section>
</template>

<script>
export default {
    name: 'Roadmap'
}
</script>

<style scoped>
    @import url('https://fonts.google.com/specimen/Lato?selection.family=Lato');
    /* @import url('https://www.fontify.me/webfont/92731/sf-ui-display-regular'); */

    section {
        height: 696.3px;
        background: #264EEE;
        color: white;
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
    }
    h5 {
        height: 23px;
        width: 81px;
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
    #node1 {
        z-index: 6;
        width: 182px;
        height: 80px;
        color: #ffffff;
        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        line-height: 40px;
    }
    #node2 {
        z-index: 6;
        width: 140px;
        height: 80px;
        color: #ffffff;
        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        line-height: 40px;
    }
    #node3 {
        z-index: 6;
        width: 143px;
        height: 80px;
        color: #ffffff;
        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        line-height: 40px;
    }
    #node4 {
        z-index: 6;
        width: 213px;
        height: 80px;
        color: #ffffff;
        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        line-height: 40px;
    }

    /**Progress Bar */
    #bar {
        z-index: 5;
        width: 853.63px;
        height: 10.22px;
        margin: 30px 0;
    }

    #bar-active {
        z-index: 6;
        width: 232.74px;
        height: 1.46px;
        background: #ffffff;
        transform: scaleY(-1);
    }

    #bar-inactive {
        opacity: 0.2;
        z-index: 6;
        width: 853.63px;
        height: 1.46px;
        background: #ffffff;
    }

    #details {
        z-index: 6;
        width: 196.99px;
        height: 116.69px;
        position: relative;
    }

    #details2 {
        z-index: 6;
        width: 197px;
        height: 95px;
        position: relative;
    }

    #details3 {
        z-index: 6;
        width: 197px;
        height: 139px;
        position: relative;
    }

    #bg, #bg2, #bg3 {
        z-index: 7;
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
        background-color: rgba(255,255,255,0.05);
    }

    #a, #a2 {
        z-index: 7;
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
        z-index: 7;
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
        background-color: rgba(255,255,255,0.05);
    }

    #follow {
        z-index: 5;
        margin: 0 auto;
        padding: 50px 0;
        width: 303.51px;
        height: 46px;
        font-family: "SFUIDisplay-Regular";
        font-size: 17px;
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
        background: linear-gradient(270deg, #00FFFFFF, #10FFFFFF);
    }

    #rectangleC {
        z-index: 5;
        width: 313.83px;
        height: 513px;
        background: linear-gradient(180deg, #00FFFFFF, #10FFFFFF);
        transform: rotate(45.00001deg);
    }

</style>