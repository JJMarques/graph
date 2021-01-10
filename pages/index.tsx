import { Select } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { GetStaticProps, InferGetStaticPropsType  } from 'next'
import { useEffect } from 'react'
import { ResponseTypes } from '../types/index'
import { fetchApi, formatDate, symbolList } from '../util/util'

export default function Index({ rates, base, startDate, endDate, symbol }: InferGetStaticPropsType<typeof getStaticProps>) {
    
	useEffect(() => {
		console.log(symbol);
	}, [])
  
    return (
        <>
          <Select
            w="300px"
			mx="auto"
			//icon={<HamburgerIcon />}
          >
            {symbol.map((symbol:string) => (
				<option key={symbol}>{symbol}</option>
			))}
          </Select>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

	//Get a predefined start and end date
	const endDate:Date = new Date()
	let startDate:Date = new Date()
	//The predefined start date will be the current day minus 15 days
	startDate.setDate(endDate.getDate()-15)
	let formattedStartDate:string = formatDate(startDate)
	let formattedEndDate:string = formatDate(endDate)

	const res :ResponseTypes = await fetchApi(formattedStartDate, formattedEndDate ,'USD')

	//get the list of avaliable symbols
	const symbol = await symbolList()

	return {
		props: {
			rates: res.rates,
			base: res.base,
			startDate: res.start_at,
			endDate: res.end_at,
			symbol
		}
	}
}
