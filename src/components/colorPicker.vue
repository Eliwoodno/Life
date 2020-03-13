	<template>
  <div class="cpicker">
    {{title}}
  <v-menu v-model="menu" top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
							<template v-slot:activator="{ on }">
								<div :style="swatchStyle" v-on="on" />
							</template>
							<v-card>
								<v-card-text class="pa-0">
									<v-color-picker v-model="color" flat @input=onInput />
								</v-card-text>
							</v-card>
						</v-menu>
     </div>
</template>
<script>
export default {
  name: 'colorPicker',
  props: {
    colorString: {
      type: String,
      default:''
    },
    title: {
      type: String,
      default:''
    },
    defaultColor: {
      type: String,
      default:''
    },
  },
  data() {
    return {
    color: this.defaultColor,
		menu: false,
    }
  },
  computed: {
    swatchStyle() {
      const { color, menu } = this
      return {
        backgroundColor: color,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    }
  },
  methods: {
    onInput() {
      this.$emit('update:colorString', this.color)
    },
    },
}
</script>
<style scoped lang="scss">
.cpicker{
  padding-left:12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
