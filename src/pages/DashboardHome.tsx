import { Calendar } from '@/components/ui/calendar'
import React from 'react'
// import { createSwapy } from 'swapy'

// const container = document.querySelector('.container')

// const swapy = createSwapy(container, {
//     animation: 'dynamic' // or spring or none
// })

// // You can disable and enable it anytime you want
// swapy.enable(true)
import { useEffect } from 'react'
// import './style.css'
import { createSwapy } from 'swapy'

const DEFAULT = {
    '1': 'a',
    '3': 'c',
    '4': 'd',
    '2': 'null'
}


function A() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <div className="item a" data-swapy-item="a">
            <div className="handle" data-swapy-handle></div>
            <div className='h-auto flex gap-x-3.5 rounded-xl'>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="border border-slate-900 bg-white w-min text-slate-800 h-auto rounded-xl"
                />
                <div className='bg-slate-100 w-full'>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

function C() {
    return (
        <div className="item c" data-swapy-item="c">
            <div className='bg-slate-50 h-28 w-full'>C</div>
        </div>
    )
}

function D() {
    return (
        <div className="item d" data-swapy-item="d">
            <div>D</div>
        </div>
    )
}

function getItemById(itemId: 'a' | 'c' | 'd' | null) {
    switch (itemId) {
        case 'a':
            return <A />
        case 'c':
            return <C />
        case 'd':
            return <D />
    }
}


function DashboardHome() {
    const slotItems: Record<string, 'a' | 'c' | 'd' | null> = localStorage.getItem('slotItem') ? JSON.parse(localStorage.getItem('slotItem')!) : DEFAULT

    useEffect(() => {
        const container = document.querySelector('.container')!
        const swapy = createSwapy(container, {
            swapMode: 'hover'
        })
        swapy.onSwap(({ data }: any) => {
            console.log('swap', data);
            localStorage.setItem('slotItem', JSON.stringify(data.object))
        })

        swapy.onSwapEnd(({ data, hasChanged }: any) => {
            console.log(hasChanged);
            console.log('end', data);
        })

        swapy.onSwapStart(() => {
            console.log('start')
        })

        return () => {
            swapy.destroy()
        }
    }, [])

    return (
        <div className="container">
            <div className="slot a" data-swapy-slot="1">
                {getItemById(slotItems['1'])}
            </div>
            <div className="second-row">
                <div className="slot b" data-swapy-slot="2">
                    {getItemById(slotItems['2'])}
                </div>
                <div className="slot c" data-swapy-slot="3">
                    {getItemById(slotItems['3'])}
                </div>
            </div>
            <div className="slot d" data-swapy-slot="4">
                {getItemById(slotItems['4'])}
            </div>
        </div>
    )
}

export default DashboardHome

// function DashboardHome() {
//     const [date, setDate] = React.useState<Date | undefined>(new Date())

//     return (
//         <React.Fragment>
//             <div className='h-auto rounded-xl overflow-hidden'>
//                 <Calendar
//                     mode="single"
//                     selected={date}
//                     onSelect={setDate}
//                     className="border bg-white text-slate-800 h-auto rounded-xl"
//                 />
//             </div>
//             <div className="container">
//                 <div className="section-1" data-swapy-slot="foo">
//                     <div className="content-a" data-swapy-item="a">
//                     </div>
//                 </div>

//                 <div className="section-2" data-swapy-slot="bar">
//                     <div className="content-b" data-swapy-item="b">
//                         <div className="handle" data-swapy-handle></div>
//                     </div>
//                 </div>

//                 <div className="section-3" data-swapy-slot="baz">
//                     <div className="content-c" data-swapy-item="c">
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

// export default DashboardHome