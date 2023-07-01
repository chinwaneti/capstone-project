import React from 'react'

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [filteredResult, setFilterResult] = useState([])
    const [search, setSearch] = useState(false)
    
    
    const text = (e) => {
        setSearchValue(e)
        console.log(searchValue);
    
        if(searchValue !== '') {
            const filteredData = slides.filter((item) => {
            return  Object.values(item)
            .join('').toLowerCase().includes(searchValue.toLowerCase());
            });
            console.log(filteredData);
            setFilterResult(filteredData);
    }

    }
    const myData = filteredResult.map(data => (
        <section key={data.id} className='flex justify-between p-4 '>
        <div>{data.name}</div>
        <div className=''><Image src={data.image} width={100} height={100}/></div>
        
        </section>
    ))

    useEffect(() => {
        searchValue === '' ? setFilterResult ([]) : myData
    })


  return (
    <div>        <div className='bg-green-500 z-50 ml-6  border-2 w-[90%] rounded-xl hover:text-green-600'>
    {searchValue.length > 1 ? (
        filteredResult.length != 0 ? (myData) : (
            <div><p> Oops! Item not Found</p></div>
        ) 
    ) : <div className='hidden'>null</div>  }
    </div></div>
  )
}
