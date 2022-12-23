import React, { useEffect } from 'react';
import { render } from 'react-dom';
import Sender from './component/Sender'
const AppMain : React.FC<{}> = () => {  

  useEffect(() => {
    injectJS("scripts/wapi.js");
  }, [])

  const injectJS = (js_path: string) => {
    const tag = document.createElement("script");
		tag.type = "text/javascript";
    tag.src = chrome.runtime.getURL(js_path); 
    (document.head || document.body || document.documentElement).appendChild(tag)
  }

  return (
    <div className="w-full font-sans antialiased">
      <div className="flex justify-between px-8 py-4 bg-white shadow focus:outline">
        <button className="text-gray-700 hover:text-gray-500 focus:outline-none">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
            <path d="M4 10.667V8h24v2.667H4zm0 6.666h24v-2.666H4v2.666zM4 24h24v-2.667H4V24z"></path>
          </svg>
        </button>
        <div className="absolute z-50 w-full top-0 left-0 px-6 hidden">
          <div className="pt-4 pb-2 overflow-hidden bg-white rounded-b-lg shadow-lg">
            <button className="px-3 text-gray-700 hover:text-gray-500 focus:outline-none">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                <path d="M25.333 8.547l-1.88-1.88L16 14.12 8.546 6.667l-1.88 1.88L14.12 16l-7.453 7.453 1.88 1.88L16 17.88l7.453 7.453 1.88-1.88L17.88 16l7.453-7.453z"></path>
              </svg>
            </button>
            <div className="px-4">
              <p className="py-2 text-sm font-semibold tracking-tight text-gray-700">WhatsApp Tools</p>
              <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/automation">Sender</a>
              <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/extract">Export Contacts</a>
              <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/generate-number">Generate Numbers</a>
              <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/checker">Number Filter</a>
              <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/templates" aria-current="page">Quick Reply</a>
              <a className="block px-4 py-3 font-medium text-gray-900 Notes hover:bg-gray-100" href="/auto-reply">Auto Reply</a>
              <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/join-groups">Join Multiple Groups</a>
              <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/notes">Personal Notes</a>
              <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/enhancements">Enhancements</a>
              <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/integration">Integration (Pro Dev)</a>
            </div>
            <div className="py-3"></div>
            <div className="px-4">
              <p className="py-2 text-sm font-semibold tracking-tight text-gray-700">Other Tools</p>
              <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/resi">Cek Resi</a>
              <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/ongkir">Cek Ongkir</a>
              <a href="chrome-extension://jkcckeembljcgeolfjmfmhljokapgdki/invoice.html" className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" target="_blank">Invoice Generator</a>
            </div>
          </div>
        </div>
        <button className="inline-flex items-center text-gray-900 hover:text-gray-600 cursor-pointer rounded-full focus:outline-none relative">
          <span className="font-medium">septian</span>
          <svg className="w-6 h-6 ml-2 bg-gray-300 rounded-full fill-current" viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
            <path fill="none" d="M0 0h24v24H0V0z"></path>
          </svg>
        </button>
        <div className="absolute z-50 w-48 inset-y-0 right-0 px-6 pt-1 mt-12 hidden">
          <div className="overflow-hidden bg-white rounded-lg shadow-xl">
            <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/account">Account</a>
            <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/redeem">Redeem</a>
            <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/personal">Personal</a>
            <a className="block px-4 py-3 font-medium text-gray-900 hover:bg-gray-100" href="/logout">Logout</a>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <Sender />
      </div>
      <button className="absolute z-20 w-full h-full bg-gray-600 opacity-25 inset-0 hidden"></button>
    </div>
  );

}
export default AppMain;
