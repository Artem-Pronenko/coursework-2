import {getSights} from "./db";

const initDataList = ({backendArr, inputSelector, listSelector, visibleElements, ignoreRegister}) => {
  const list = document.querySelector(listSelector)
  const input = document.querySelector(inputSelector)
  list.classList.add('hidden')

  const innerListItem = (arrList, srt = '') => {
    arrList.forEach((item, index) => {
      if (index >= visibleElements) return
      srt += `<li class="list-item">${item}</li>`
    })
    list.innerHTML = srt
  }

  const changeInput = () => {
    const {value} = input
    const reg = new RegExp(value, ignoreRegister ? 'gi' : '')
    const newList = backendArr.filter(item => item.match(reg))
    innerListItem(newList)
  }

  const showList = () => {
    changeInput()
    list.classList.remove('hidden')
  }

  const hideListUnFocus = event => {
    if (!event.target.closest('.data-form')) {
      list.classList.add('hidden')
    }
  }

  const getListItem = event => {
    const {target} = event
    input.value = target.textContent
    list.classList.add('hidden')
  }

  changeInput()

  input.addEventListener('focus', showList)
  input.addEventListener('input', changeInput)
  list.addEventListener('click', getListItem)
  document.body.addEventListener('click', hideListUnFocus)
}

let backendArr = []
getSights('dost')
  .then((res: Array<object>) => {
    res.forEach((item: any) => {
      const data = item.data
      backendArr.push(...data.name)
    })
    backendArr = backendArr.filter(item => item !== 'dost')
    initDataList({
      backendArr,
      inputSelector: '#search-input',
      listSelector: '.list',
      visibleElements: 5,
      ignoreRegister: true
    })
  })


