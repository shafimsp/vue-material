import material from 'vue-material/material'
import MdDateInput from './MdDateInput'

export default Vue => {
  material(Vue)
  Vue.component(MdDateInput.name, MdDateInput)
}
