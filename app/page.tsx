export interface Data {
  oficial: Oficial
  tarjeta: Tarjeta
  mep: Mep
  ccl: Ccl
  fiwind: Fiwind
  letsBit: LetsBit
  plusCambio: PlusCambio
  ledesMep: LedesMep
  ledesCcl: LedesCcl
  informal: Informal
  mayorista: Mayorista
  netflix: Netflix
  cripto: Cripto
  $uxd: Uxd
  tiendaBroker: TiendaBroker
  plusInversiones: PlusInversiones
  deepBlue: any
}

export interface Oficial {
  name: string
  buy: number
  sell: number
  timestamp: number
  variation: number
  spread: number
  volumen: any
}

export interface Tarjeta {
  name: string
  buy: number
  sell: number
  timestamp: number
  variation: number
  spread: number
  volumen: any
}

export interface Mep {
  name: string
  buy: any
  sell: number
  timestamp: number
  variation: number
  volumen: number
  extra: Extra
}

export interface Extra {
  referenceBuy1: string[]
  referenceBuy2: string[]
}

export interface Ccl {
  name: string
  buy: any
  sell: number
  timestamp: number
  variation: number
  volumen: number
  extra: Extra2
}

export interface Extra2 {
  referenceBuy1: string[]
  referenceBuy2: string[]
}

export interface Fiwind {
  name: string
  buy: number
  sell: number
  timestamp: number
  variation: any
  spread: number
  volumen: any
}

export interface LetsBit {
  name: string
  buy: number
  sell: number
  timestamp: number
  variation: any
  spread: number
  volumen: any
}

export interface PlusCambio {
  name: string
  buy: number
  sell: number
  timestamp: number
  variation: any
  spread: number
  volumen: any
}

export interface LedesMep {
  name: string
  buy: any
  sell: number
  timestamp: number
  variation: number
  volumen: number
  extra: Extra3
}

export interface Extra3 {
  referenceBuy1: string[]
  referenceBuy2: string[]
}

export interface LedesCcl {
  name: string
  buy: any
  sell: number
  timestamp: number
  variation: number
  volumen: number
  extra: Extra4
}

export interface Extra4 {
  referenceBuy1: string[]
  referenceBuy2: string[]
}

export interface Informal {
  name: string
  buy: number
  sell: number
  timestamp: number
  variation: number
  spread: number
  volumen: any
}

export interface Mayorista {
  name: string
  buy: number
  sell: number
  timestamp: number
  variation: number
  spread: number
  volumen: any
}

export interface Netflix {
  name: string
  buy: number
  sell: number
  timestamp: number
  variation: number
  spread: number
  volumen: any
}

export interface Cripto {
  name: string
  buy: number
  sell: number
  timestamp: number
  variation: number
  spread: number
  volumen: any
}

export interface Uxd {
  name: string
  buy: number
  sell: number
  timestamp: number
  variation: any
  spread: number
  volumen: any
}

export interface TiendaBroker {
  name: string
  buy: any
  sell: number
  timestamp: number
  variation: any
  volumen: any
}

export interface PlusInversiones {
  name: string
  buy: any
  sell: number
  timestamp: number
  variation: any
  volumen: any
}

async function getDolar () {
  const response = await fetch(
    'https://www.dolarito.ar/api/frontend/quotations/dolar',
    {
      headers: {
        authority: 'www.dolarito.ar',
        accept: 'application/json, text/plain, */*',
        'accept-language': 'es-US,es;q=0.9',
        'auth-client': '99559ef69ca740083c9bd2b862460ab8',
        'cache-control': 'no-cache',
        cookie:
          '_gcl_au=1.1.1308940708.1701193964; _ga=GA1.1.992466810.1701193964; _ga_TVG8CMMVVH=GS1.1.1701193963.1.0.1701193963.0.0.0',
        pragma: 'no-cache',
        referer: 'https://www.dolarito.ar/',
        'sec-ch-ua':
          '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36'
      },
      next: { revalidate: 400 }
    }
  )
  const data = await response.json()
  return data
}

export default async function Home () {
  const data: Data = await getDolar()

  function returnHumanReadableSpanishTimestapmToData (timestamp: number) {
    const date = new Date(timestamp)
    const now = new Date()
    const seconds = Math.round((now.getTime() - date.getTime()) / 1000)
    const minutes = Math.round(seconds / 60)
    const hours = Math.round(minutes / 60)
    const days = Math.round(hours / 24)
    const months = Math.round(days / 30)
    const years = Math.round(days / 365.25)

    if (seconds < 5) {
      return 'Hace unos segundos'
    } else if (seconds < 60) {
      return `Hace ${seconds} segundos`
    } else if (seconds < 90) {
      return 'Hace un minuto'
    } else if (minutes < 60) {
      return `Hace ${minutes} minutos`
    } else if (minutes < 90) {
      return 'Hace una hora'
    } else if (hours < 24) {
      return `Hace ${hours} horas`
    } else if (hours < 36) {
      return 'Hace un día'
    } else if (days < 30) {
      return `Hace ${days} días`
    } else if (days < 45) {
      return 'Hace un mes'
    } else if (days < 365) {
      return `Hace ${months} meses`
    } else if (years < 1.5) {
      return 'Hace un año'
    } else {
      return `Hace ${years} años`
    }
  }

  function Dolar ({ dolar }: any) {
    return (
      <div className='relative w-80 z-30 animatable animate-fade-up in-viewport'>
        <a className='box h-full hover-box flex flex-col relative  z-30'>
          <h3 className='capitalize text-xl mb-0 my-0 max-w-[250px]'>
            {dolar.name}
          </h3>
          <span className='text-gray-500 text-sm'>
            {returnHumanReadableSpanishTimestapmToData(dolar.timestamp)}{' '}
            {dolar.spread ? `- Spread: $${dolar.spread}` : null}
          </span>
          <div className='mt-4'>
            {dolar.buy && dolar.sell ? (
              <div className='flex gap-8'>
                <span className='metric text-5xl md:text-sm mb-4 bg-red-white bg-clip-text text-white'>
                  <div className='flex flex-col'>
                    <span className='text-lg mb-1'>Venta</span>
                    <span className='text-2xl'>${dolar.buy}</span>
                  </div>
                </span>
                <span className='metric text-5xl md:text-sm mb-4 bg-clip-text'>
                  <div className='flex flex-col'>
                    <span className='text-lg mb-1'>Compra</span>
                    <span className='text-2xl text-green-500'>
                      ${dolar.sell}
                    </span>
                  </div>
                </span>
              </div>
            ) : (
              <>
                {' '}
                <span className='metric text-5xl md:text-sm mb-4 bg-clip-text'>
                  <div className='flex flex-col'>
                    <span className='text-lg'>Venta</span>
                    <span className='text-2xl text-green-500'>
                      ${dolar.buy ?? dolar.sell}
                    </span>
                  </div>
                </span>
              </>
            )}
          </div>
        </a>
        {dolar.variation < 0 ? (
          <div className='absolute bottom-0 z-[999] w-full h-1 bg-red-700'></div>
        ) : null}

        {dolar.variation > 0 ? (
          <div className='absolute bottom-0 z-[999] w-full h-1 bg-green-700'></div>
        ) : null}

        {!dolar.variation ? (
          <div className='absolute bottom-0 z-[999] w-full h-1 bg-gray-700'></div>
        ) : null}
      </div>
    )
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-5'>
      <h1 className='text-3xl mb-12'>Cotizaciones del Dólar</h1>
      <div className='flex flex-wrap gap-4 w-full justify-center'>
        <Dolar dolar={data.oficial} />
        <Dolar dolar={data.informal} />
        <Dolar dolar={data.cripto} />
        <Dolar dolar={data.mep} />
        <Dolar dolar={data.ledesMep} />
        <Dolar dolar={data.ccl} />
        <Dolar dolar={data.ledesCcl} />
        <Dolar dolar={data.plusCambio} />
        <Dolar dolar={data.letsBit} />
        <Dolar dolar={data.fiwind} />
      </div>
    </main>
  )
}
