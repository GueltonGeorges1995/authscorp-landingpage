<template>
    <div>
        <Roadmap />
        <Pricing />
    </div>
</template>

<script>
import Roadmap from "./components/Roadmap";
import Pricing from "./components/Pricing";

export default {
  name: 'App',

  components: {
      Roadmap,
      Pricing
  },
};
</script>