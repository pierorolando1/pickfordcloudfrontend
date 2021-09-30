import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startChangeToEn, startChangeToEs } from '../redux/lenguages/actions'

export const ChangeLenguage = () => {
    const { leng } = useSelector((state:any) => state.lenguages)
    const dispatch = useDispatch()

    return (
        <Menu as="div" className="relative inline-block text-left bg-gray-800 bg-opacity-50">
            <div>
                <Menu.Button className="cursor-pointer flex font-medium text-sm items-center justify-center h-7 text-gray-500 border-transparent px-2">
                    <h1 className="px-2 text-gray-300">{ leng === "es" ? "Idiomas" : "Lenguages" }</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => {
                                        dispatch(startChangeToEn())
                                    }}
                                    className={`${(active || leng === "en") ? 'bg-violet-500 text-white' : 'text-gray-400'
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                    English
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => {
                                        dispatch(startChangeToEs())
                                    }}
                                    className={`${(active || leng === "es") ? 'bg-violet-500 text-white' : 'text-gray-400'
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                    Español
                                </button>
                            )}
                        </Menu.Item>
                    </div>

                </Menu.Items>
            </Transition>
        </Menu>
    )
}
