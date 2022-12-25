import React, { useState } from 'react';
const Sender : React.FC<{}> = () =>  {

    const [imageAttach, setImageAttach] = useState(null);

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
        //runMethod(`window.WAPI.sendMessage('6285778151604@c.us', 'test').then(res => res.id)`);
    }

    const toDataURL = e => new Promise((t, n) => {
		const r = new FileReader;
		r.onloadend = () => t(r.result);
        r.onerror = n; 
        r.readAsDataURL(e);
	})

    const a = (e, t = !0) => {
		const n = "(() => {" + e + "})();",
			r = document.createElement("script");
		r.textContent = n, (document.head || document.documentElement).appendChild(r), t && r.remove()
	};

    const runMethod = e => r(void 0, void 0, void 0, (function*() {
		const t = (new Date).getTime();
		return new Promise((n, r) => {
			let i = !1;
			const o = e => {
				const r = e.detail;
				if (null !== r && r.id === t && "result" === r.type) return document.removeEventListener("WAPIResult", o), i = !0, n(r.data)
			};
			document.addEventListener("WAPIResult", o), setTimeout(() => {
				if (!i) return document.removeEventListener("WAPIResult", o), r("Failed to runMethod")
			}, 15e3), a(`\n      if (!('WAPI' in window)) {\n        alert("WAPI NOT FOUND IN ${encodeURIComponent(e)}")\n        return\n      }\n\n      // try {\n      const result = Promise.resolve(${e});\n\n      result.then(res => {\n        const data = {\n          id: ${t},\n          type: "result",\n          data: res\n        };\n  \n        const event = new CustomEvent("WAPIResult", { detail: data });\n        document.dispatchEvent(event);\n        console.log("Dispatching WAPIResult")\n      })\n      // } catch (err) {\n      //   alert(err)\n      // }\n    `)
		}).catch(t => {
			console.log(`error in : \n${e} \n`), console.log({
				err: t
			})
		})
	}));

    var r = function(e, t, n, r) {
		return new(n || (n = Promise))((function(a, i) {
			function o(e) {
				try {
					c(r.next(e))
				} catch (e) {
					i(e)
				}
			}

			function s(e) {
				try {
					c(r.throw(e))
				} catch (e) {
					i(e)
				}
			}

			function c(e) {
				var t;
				e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
					e(t)
				}))).then(o, s)
			}
			c((r = r.apply(e, t || [])).next())
		}))
	};

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
                                <input type="hidden" id="hdn_image" name="hdn_image" value={imageAttach != null ? imageAttach.dataURL : ""} />
                                <input className="hidden" type="file" accept="image/*" name="image"
                                    onChange={e => {
                                        const [t] = e.target.files;
                                        toDataURL(t).then(e => {
                                            setImageAttach(Object.assign(Object.assign({}, t), {
                                                dataURL: e
                                            }))

                                            //console.log(imageAttach);
                                        })
                                    }}
                                />
                                <button className="px-4 py-2 text-sm font-semibold tracking-widest text-blue-700 uppercase bg-blue-200 rounded shadow pointer-events-none">Upload Image</button>
                            </label>
                        </div>

                        <label className="block">
                            <textarea id="message" name="message" rows={3} className="block w-full form-input" placeholder="Enter message template" 
                                required={true}></textarea>
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
