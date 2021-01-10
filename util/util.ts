import { start } from 'repl'
import { ResponseTypes } from '../types/index'

export const fetchApi = async (startDate:string, endDate:string, symbols:string) => {
    const url = `https://api.exchangeratesapi.io/history?start_at=${startDate}&end_at=${endDate}&symbols=${symbols}`
    const res:ResponseTypes = await fetch(url)
    .then(r => r.json())

    return res
}

export const formatDate = (date:Date):string => {
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    
    return `${year.toString()}-${month.toString()}-${day.toString()}`
}

export const symbolList = async () => {
    var symbolList = []
    const { rates } = await fetch('https://api.exchangeratesapi.io/latest').then(r => r.json())

    for(let symbol in rates) {
        symbolList.push(symbol)
    }
    
    return symbolList    
}