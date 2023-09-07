// bikin tampilan card, menggunakan js + css
// challange nya, ga boleh ada element body di file html

// bikin wrapper display flex
// me looping si items
// item nya kita jadiin card
// card nya kita pasang ke wrapper
// wrapper nya kita pasang ke body

// cerita nya kita dapet list of item dari BE
const items = [
  {
    id: 1,
    name: 'Buku',
    status: true,
    price: 5000,
    imgUrl: 'https://cdn.gramedia.com/uploads/picture_meta/2023/5/5/laeb24ugewckaxz4czmwew.png'
  },
  {
    id: 2,
    name: 'Pensil',
    status: true,
    price: 2000,
    imgUrl: 'https://faber-castell.co.id/cfind/source/images/product/gwm/117102-a.jpg'
  },
  {
    id: 3,
    name: 'Gundam',
    status: false,
    price: 200000,
    imgUrl: 'https://i0.wp.com/gundamnesia.com/wp-content/uploads/2022/07/781f75460c6a55909bad997a9d27bda9.jpg?fit=700%2C700&ssl=1'
  },
  {
    id: 4,
    name: 'Smart Phone',
    status: true,
    price: 2000000,
    imgUrl: 'https://cdn.vox-cdn.com/thumbor/BTvCULBmchPm0igKcjazvMfK3tw=/0x0:2000x1333/768x768/filters:focal(1000x667:1001x668)/cdn.vox-cdn.com/uploads/chorus_asset/file/24643386/DSC04646_processed.jpg'
  },
]


function parseItemsToCards () {
  const cards = []

  for (let i = 0; i < items.length; i++) {
    const currentCard = items[i]

    const cardDiv = document.createElement('div') // card
    const nameH1 = document.createElement('h1') // nama
    const statusSpan = createStatusLabel(currentCard) // create status div
    const priceSpan = document.createElement('span') // price
    const itemImg = document.createElement('img') // img

    // set value nama
    nameH1.textContent = currentCard.name
    // set price
    const curentPriceText = Number(currentCard.price).toLocaleString('en-US').replace(/,/g, '.')
    priceSpan.textContent = `Rp${curentPriceText}`
    priceSpan.classList.add('price')
    // set src nya img
    itemImg.setAttribute('src', currentCard.imgUrl)
    itemImg.classList.add('card-img')
    cardDiv.classList.add('card')

    cardDiv.append(nameH1)
    cardDiv.append(priceSpan)
    cardDiv.append(statusSpan)
    cardDiv.append(itemImg)

    cards.push(cardDiv)
  }

  return cards
}

function createStatusLabel (item) {
  const statusDiv = document.createElement('span')
  const currentColor = (item.status) ? 'color-green' : 'color-red'
  const currentText = (item.status) ? 'Aktif' : 'Tidak Aktif'
  statusDiv.textContent = currentText
  statusDiv.classList.add(currentColor, 'status-label')
  return statusDiv
}

function main () {
  const wrapperDiv = document.createElement('div')
  wrapperDiv.setAttribute('id', 'wrapper')
  wrapperDiv.classList.add('wrapper')

  const parsedCards = parseItemsToCards()

  for(let i = 0; i < parsedCards.length; i++) {
    wrapperDiv.append(parsedCards[i])
  }
  
  document.body.append(wrapperDiv)
}

main()