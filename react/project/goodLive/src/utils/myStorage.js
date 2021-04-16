export default {
  // 封装setItem和getItem
  setItem(key,vaule,module_name) { 
    if (module_name) {
      let module_name_value = this.getItem(module_name);
      module_name_value[key] = vaule;
      localStorage.setItem(module_name,module_name_value);
    } else {
      localStorage.setItem(key,vaule);
    }
  },
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      if (val) return val[key];
      return ;
    } else {
      return localStorage.getItem(key);
    }
  },
  clear(key) {
    key?localStorage.removeItem(key):localStorage.clear()
  }
}