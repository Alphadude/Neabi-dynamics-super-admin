import Dash from '../images/sideBar/Dashboard.svg'
import Company from '../images/sideBar/company.png'
import Bell from '../images/sideBar/Bell.svg'
import Wallet from '../images/sideBar/Wallet.svg'
import Settings from '../images/sideBar/Settings.svg'
import Airline from '../images/sideBar/Airline.svg'


  const Nav = [
    {
      src: Dash,
      name: 'Dashboard',
      link: '/dashboard'
    },
    {
      src: Airline,
      name: 'Airlines',
      link: '/airlines'
    },
    {
      src: Company,
      name: 'Companies',
      link: '/companies'
    },
    {
      src: Bell,
      name: 'HMO',
      link: '/HMO'
    },
    {
      src: Wallet,
      name: 'Payment Details',
      link: '/payment-details'
    },
  ]
  const Extra = [
    {
      src: Bell,
      name: 'Notification',
      link: '/notification'
    },
    {
      src: Settings,
      name: 'Settings',
      link: '/settings'
    }
  ]

  const Stats = [
    {
      name:'Income',
      price:'$ 9460.00',
      value:'↓ 1.5%',
      com:'Compared to $9940 yesterday',
      week:'Last week Income',
      income:'$25658.00',
      p:'text-[#FF2727] text-[12px] font-[500] leading-5 mt-6 transition transform duration-300 animate-bounce'
    },
    {
      name:'Current',
      price:'$ 5660.00',
      value:'↑ 2.5%',
      com:'Compared to $5240 yesterday',
      week:'Last week',
      income:'$22658.00',
      p:'text-[#52C93F] text-[12px] font-[500] leading-5 mt-6 transition transform duration-300 animate-bounce'
    }
  ]
  const Gen = [
    {
      span:' mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#006AFF]',
      p:'Invoice generated',
      value:'54%',
      pv:'ml-2 text-[10px] leading-6',
      raise:'↑',
      pr:'text-[#FF2727]  text-[10px] leading-4 transition transform duration-300 animate-bounce pt-2'
    },
    {
      span:'mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#52C93F]',
      p:'Invoice paid',
      value:'20%',
      pv: 'pt-1 ml-10 text-[10px]',
      raise:'↑',
      pr:'text-[#FF2727] text-[10px] leading-4 transition transform duration-300 animate-bounce pt-2'
    },
    {
      span:' mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#FF2727]',
      p:'Invoice pending',
      value:'26%',
      pv:'ml-5 text-[10px] leading-6',
      raise:'↓',
      pr:'text-[#52C93F] text-[10px] leading-4 transition transform duration-300 animate-bounce pt-2'
    }
  ]
  export {Nav, Extra, Stats, Gen}
