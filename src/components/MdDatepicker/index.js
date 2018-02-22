import material from 'vue-material/material'
import MdDateInput from './MdDateInput'
import MdDatepicker from './MdDatepicker'

export default Vue => {
  material(Vue)
  Vue.component(MdDateInput.name, MdDateInput)
  Vue.component(MdDatepicker.name, MdDatepicker)
}
