import React from 'react';
const Sender : React.FC<{}> = () =>  {

    const runScript = (scriptFile:string) =>
    {
        var _script = document.createElement('script');
        _script.setAttribute('src', chrome.runtime.getURL(scriptFile));
        (document.head||document.documentElement).appendChild( _script  );
        _script.parentNode!.removeChild( _script);
    }

    function sendMessage()
    {
        runScript("scripts/blastMessage.js");
        
    }

    const toDataURL = e => new Promise((t, n) => {
		const r = new FileReader;
		r.onloadend = () => t(r.result);
        r.onerror = n; 
        r.readAsDataURL(e);
	})

    return (
        <div>
            <div className="max-w-xl mx-auto">
                <h3 className="px-8 py-4 text-2xl font-semibold text-gray-900">Send Message</h3>
                <div className="mb-8 overflow-hidden bg-white rounded-lg shadow-md">
                    <div className="px-6 py-4">
                        <form className="grid items-center grid-cols-1 row-gap-4">
                        <label className="block">
                            <input type="file" id="phone_number" name="phone_number" className="block w-full form-input" placeholder="Choose CSV File" required={true} />
                        </label>
                        <div className="flex flex-row items-center justify-between">
                            <span className="font-semibold text-gray-900">Image</span>
                            <label className="py-2">
                                <input className="hidden" type="file" accept="image/*" name="image"
                                    onChange={e => {
                                        const [t] = e.target.files;
                                        toDataURL(t).then(e => {
                                            // B(Object.assign(Object.assign({}, t), {
                                            //     dataURL: e
                                            // }))
                                        })
                                    }}
                                />
                                <button className="px-4 py-2 text-sm font-semibold tracking-widest text-blue-700 uppercase bg-blue-200 rounded shadow pointer-events-none">Upload Image</button>
                            </label>
                        </div>

                        <label className="block">
                            <textarea id="message" name="message" rows={3} className="block w-full form-input" placeholder="Enter message template" required={true}></textarea>
                        </label>
                        <button 
                            onClick={sendMessage}
                            className="w-full text-blue-100 text-sm font-medium capitalize rounded focus:outline-none px-6 py-3 bg-blue-500 hover:bg-blue-400" type="button">Send</button>
                        </form>
                    </div>
                </div>
                <h4 className="px-8 py-4 text-xl font-semibold text-gray-900">Options</h4>
                <div className="flex flex-col px-8 py-4 mb-10 bg-white rounded-lg shadow-md">
                    <label className="flex items-center py-2">
                        <span className="flex-shrink-0 mr-3">Min. Delay</span>
                        <input type="text" className="w-full border-blue-400 form-input" name="minDelay" placeholder="Delay in seconds" defaultValue="5" required={true}/>
                    </label>
                    <label className="flex items-center py-2">
                        <span className="flex-shrink-0 mr-3">Max Delay</span>
                        <input type="text" className="w-full border-blue-400 form-input" name="maxDelay" placeholder="Delay in seconds" defaultValue="10" required={true}/>
                    </label>
                </div>
            </div>
        </div>
    );

}
export default Sender;
