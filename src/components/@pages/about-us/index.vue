<template>
    <div>
        <div class="company-faq">
            <docs-header />
        </div>
        <div>
            <About/>
        </div>
    </div>
</template>

<script>

    import DocsHeader from './header'
    import About from './about'

    export default {
        components: {
            DocsHeader,
            About
        }
    }

</script>

<style lang="scss">

.clip-eb {
    clip-path: ellipse(150% 120% at 50% -30%);
    padding-bottom: 175px !important;
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .company-faq {
    // header
    header {
      .hero {
        padding-top: 40px;
        padding-bottom: 64px;
      }
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) {
  .company-faq {
    // header
    header {
      .hero {
        padding-top: 40px;
        padding-bottom: 64px;
      }
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) {
  .company-faq {
    // header
    header {
      &.clip-eb {
        clip-path: ellipse(200% 120% at 50% -30%);
      }

      .hero {
        padding-top: 40px;
        padding-bottom: 64px;
      }
    }
  }
}

</style>
