import { observable, action } from 'mobx'

class CounterStore {
  @observable counter = Number(location.href.split(/\//)[4]) || 1
  @observable isOk = true

  @action setCounter(num: string) {
    this.counter += Number(num)
  }

  @action increment() {
    this.counter += 1
  }

}
export const counterStore = new CounterStore()