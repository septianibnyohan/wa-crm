! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) {
                return e[t]
            }.bind(null, o));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 232)
}({
    232: function(e, t) {
        window.Store || function() {
            function e(e) {
                let t = 0,
                    n = [{
                        id: "Store",
                        conditions: e => e.default && e.default.Chat && e.default.Msg ? e.default : null
                    }, {
                        id: "MediaCollection",
                        conditions: e => e.default && e.default.prototype && e.default.prototype.processAttachments ? e.default : null
                    }, {
                        id: "MediaProcess",
                        conditions: e => e.BLOB ? e : null
                    }, {
                        id: "Wap",
                        conditions: e => e.createGroup ? e : null
                    }, {
                        id: "ServiceWorker",
                        conditions: e => e.default && e.default.killServiceWorker ? e : null
                    }, {
                        id: "State",
                        conditions: e => e.STATE && e.STREAM ? e : null
                    }, {
                        id: "WapDelete",
                        conditions: e => e.sendConversationDelete && 2 == e.sendConversationDelete.length ? e : null
                    }, {
                        id: "Conn",
                        conditions: e => e.default && e.default.ref && e.default.refTTL ? e.default : e.Conn && e.Conn.ref && e.Conn.refTTL ? e.Conn : null
                    }, {
                        id: "WapQuery",
                        conditions: e => e.default && e.instance && e.instance.queryExist ? e.instance : null
                    }, {
                        id: "checkNumberBeta",
                        conditions: e => e.queryExists && e.queryPhoneExists ? e : null
                    }, {
                        id: "checkNumberBeta",
                        conditions: e => e.default && "function" == typeof e.default.toString && e.default.toString().includes("Should not reach queryExists MD") ? e.default : null
                    }, {
                        id: "CryptoLib",
                        conditions: e => e.decryptE2EMedia ? e : null
                    }, {
                        id: "MDBackend",
                        conditions: e => e.MDBackend ? e.isMDBackend() : null
                    }, {
                        id: "User",
                        conditions: e => e.getMaybeMeUser ? e : null
                    }, {
                        id: "MsgKey",
                        conditions: e => e.default && e.default.fromString ? e.default : null
                    }, {
                        id: "QueryExist",
                        conditions: e => e.QueryExists ? e.QueryExists : null
                    }, {
                        id: "Builders",
                        conditions: e => e.TemplateMessage && e.HydratedFourRowTemplate ? e : null
                    }, {
                        id: "OpenChat",
                        conditions: e => e.default && e.default.prototype && e.default.prototype.openChat ? e.default : null
                    }, {
                        id: "UserConstructor",
                        conditions: e => e.default && e.default.prototype && e.default.prototype.isServer && e.default.prototype.isUser ? e.default : null
                    }, {
                        id: "SendTextMsgToChat",
                        conditions: e => e.sendTextMsgToChat ? e.sendTextMsgToChat : null
                    }, {
                        id: "SendSeen",
                        conditions: e => e.sendSeen ? e.sendSeen : null
                    }, {
                        id: "SendMessage",
                        conditions: e => e.addAndSendMsgToChat ? e : null
                    }, {
                        id: "sendDelete",
                        conditions: e => e.sendDelete ? e.sendDelete : null
                    }, {
                        id: "WidUtils",
                        conditions: e => e.createWid ? e : null
                    }, {
                        id: "ConversationMsgs",
                        conditions: e => e.loadEarlierMsgs ? e : null
                    }, {
                        id: "UploadUtils",
                        conditions: e => e.default && e.default.encryptAndUpload ? e.default : null
                    }, {
                        id: "FindChat",
                        conditions: e => e && e.findChat ? e : null
                    }];
                for (let i in e)
                    if ("object" == typeof e[i] && null !== e[i] && (n.forEach(n => {
                            if (!n.conditions || n.foundedModule) return;
                            let o = n.conditions(e[i]);
                            null !== o && (t++, n.foundedModule = o)
                        }), t == n.length)) break;
                let i = n.find(e => "Store" === e.id);
                return window.Store = i.foundedModule ? i.foundedModule : {}, window.Store.Chat._find = e => {
                    const t = window.Store.Chat.get(e);
                    return t ? Promise.resolve(t) : Promise.resolve({
                        id: e
                    })
                }, n.splice(n.indexOf(i), 1), n.forEach(e => {
                    e.foundedModule && (window.Store[e.id] = e.foundedModule)
                }), window.Store.Chat.modelClass.prototype.sendMessage = function(e) {
                    window.Store.SendTextMsgToChat(this, ...arguments)
                }, window.Store
            }
            if ("function" == typeof webpackJsonp) webpackJsonp([], {
                parasite: (t, n, i) => e(i)
            }, ["parasite"]);
            else {
                let t = (new Date).getTime();
                webpackChunkwhatsapp_web_client.push([
                    ["parasite" + t], {},
                    function(t, n, i) {
                        let o = [];
                        for (let e in t.m) {
                            let n = t(e);
                            o.push(n)
                        }
                        e(o)
                    }
                ])
            }
        }(), window.WAPI = {
            lastRead: {}
        }, window.WAPI._serializeRawObj = e => e ? e.toJSON() : {}, window.WAPI._serializeChatObj = e => null == e ? null : Object.assign(window.WAPI._serializeRawObj(e), {
            kind: e.kind,
            isGroup: e.isGroup,
            contact: e.contact ? window.WAPI._serializeContactObj(e.contact) : null,
            groupMetadata: e.groupMetadata ? window.WAPI._serializeRawObj(e.groupMetadata) : null,
            presence: e.presence ? window.WAPI._serializeRawObj(e.presence) : null,
            msgs: null
        }), window.WAPI._serializeContactObj = e => null == e ? null : Object.assign(window.WAPI._serializeRawObj(e), {
            formattedName: e.formattedName,
            isHighLevelVerified: e.isHighLevelVerified,
            isMe: e.isMe,
            isMyContact: e.isMyContact,
            isPSA: e.isPSA,
            isUser: e.isUser,
            isVerified: e.isVerified,
            isWAContact: e.isWAContact,
            profilePicThumbObj: e.profilePicThumb ? WAPI._serializeProfilePicThumb(e.profilePicThumb) : {},
            statusMute: e.statusMute,
            msgs: null
        }), window.WAPI._serializeMessageObj = e => null == e ? null : Object.assign(window.WAPI._serializeRawObj(e), {
            id: e.id._serialized,
            sender: e.senderObj ? WAPI._serializeContactObj(e.senderObj) : null,
            timestamp: e.t,
            content: e.body,
            isGroupMsg: e.isGroupMsg,
            isLink: e.isLink,
            isMMS: e.isMMS,
            isMedia: e.isMedia,
            isNotification: e.isNotification,
            isPSA: e.isPSA,
            type: e.type,
            chat: WAPI._serializeChatObj(e.chat),
            chatId: e.id.remote,
            quotedMsgObj: WAPI._serializeMessageObj(e._quotedMsgObj),
            mediaData: window.WAPI._serializeRawObj(e.mediaData)
        }), window.WAPI._serializeNumberStatusObj = e => null == e ? null : Object.assign({}, {
            id: e.jid,
            status: e.status,
            isBusiness: !0 === e.biz,
            canReceiveMessage: 200 === e.status
        }), window.WAPI._serializeProfilePicThumb = e => null == e ? null : Object.assign({}, {
            eurl: e.eurl,
            id: e.id,
            img: e.img,
            imgFull: e.imgFull,
            raw: e.raw,
            tag: e.tag
        }), window.WAPI.createGroup = function(e, t) {
            return Array.isArray(t) || (t = [t]), window.Store.Wap.createGroup(e, t)
        }, window.WAPI.leaveGroup = function(e) {
            return e = "string" == typeof e ? e : e._serialized, WAPI.getChat(e).sendExit()
        }, window.WAPI.getAllContacts = function(e) {
            const t = window.Store.Contact.map(e => WAPI._serializeContactObj(e));
            return void 0 !== e && e(t), t
        }, window.WAPI.getMyContacts = function(e) {
            const t = window.Store.Contact.filter(e => !0 === e.isMyContact).map(e => WAPI._serializeContactObj(e));
            return void 0 !== e && e(t), t
        }, window.WAPI.getContact = function(e, t) {
            const n = window.Store.Contact.get(e);
            return void 0 !== t && t(window.WAPI._serializeContactObj(n)), window.WAPI._serializeContactObj(n)
        }, window.WAPI.getAllChats = function(e) {
            const t = window.Store.Chat.map(e => WAPI._serializeChatObj(e));
            return void 0 !== e && e(t), t
        }, window.WAPI.haveNewMsg = function(e) {
            return e.unreadCount > 0
        }, window.WAPI.getAllChatsWithNewMsg = function(e) {
            const t = window.Store.Chat.filter(window.WAPI.haveNewMsg).map(e => WAPI._serializeChatObj(e));
            return void 0 !== e && e(t), t
        }, window.WAPI.getAllChatIds = function(e) {
            const t = window.Store.Chat.map(e => e.id._serialized || e.id);
            return void 0 !== e && e(t), t
        }, window.WAPI.getAllGroups = function(e) {
            const t = window.Store.Chat.filter(e => e.isGroup);
            return void 0 !== e && e(t), t
        }, window.WAPI.getChat = function(e, t) {
            e = "string" == typeof e ? e : e._serialized, window.Store.FindChat.findChat(e).then(e => (e.sendMessage = e.sendMessage ? e.sendMessage : function() {
                return window.Store.sendMessage.apply(this, arguments)
            }, void 0 !== t && t(e), e))
        }, window.WAPI.getChatByName = function(e, t) {
            const n = window.WAPI.getAllChats().find(t => t.name.includes(e));
            return void 0 !== t && t(n), n
        }, window.WAPI.sendImageFromDatabasePicBot = function(e, t, n) {
            var i = window.WAPI.getChatByName("DATABASEPICBOT").msgs.find(t => t.caption == e);
            if (void 0 === i) return !1;
            if (void 0 === WAPI.getChat(t)) return !1;
            const o = i.caption;
            return i.id.id = window.WAPI.getNewId(), i.id.remote = t, i.t = Math.ceil((new Date).getTime() / 1e3), i.to = t, i.caption = void 0 !== n && "" !== n ? n : "", i.collection.send(i).then((function(e) {
                i.caption = o
            })), !0
        }, window.WAPI.sendMessageWithThumb = function(e, t, n, i, o, s, a) {
            var r = WAPI.getChat(s);
            if (void 0 === r) return void 0 !== a && a(!1), !1;
            var d = {
                canonicalUrl: t,
                description: i,
                matchedText: t,
                title: n,
                thumbnail: e,
                compose: !0
            };
            return r.sendMessage(o, {
                linkPreview: d,
                mentionedJidList: [],
                quotedMsg: null,
                quotedMsgAdminGroupJid: null
            }), void 0 !== a && a(!0), !0
        }, window.WAPI.getNewId = function() {
            for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < 20; n++) e += t.charAt(Math.floor(Math.random() * t.length));
            return e
        }, window.WAPI.getChatById = async function(e, t) {
            let n = WAPI.getChat(e);
            return n = !!n && WAPI._serializeChatObj(n), void 0 !== t && t(n), n
        }, window.WAPI.getUnreadMessagesInChat = function(e, t, n, i) {
            let o = WAPI.getChat(e).msgs._models,
                s = [];
            for (let e = o.length - 1; e >= 0; e--) {
                if ("remove" === e) continue;
                let i = o[e];
                if ("boolean" == typeof i.isNewMsg && !1 !== i.isNewMsg) {
                    i.isNewMsg = !1;
                    let e = WAPI.processMessageObj(i, t, n);
                    e && s.push(e)
                }
            }
            return void 0 !== i && i(s), s
        }, window.WAPI.loadEarlierMessages = function(e, t) {
            const n = WAPI.getChat(e);
            void 0 !== t ? n.loadEarlierMsgs().then((function() {
                t()
            })) : n.loadEarlierMsgs()
        }, window.WAPI.loadAllEarlierMessages = function(e, t) {
            const n = WAPI.getChat(e);
            x = function() {
                n.msgs.msgLoadState.noEarlierMsgs ? t && t() : n.loadEarlierMsgs().then(x)
            }, x()
        }, window.WAPI.asyncLoadAllEarlierMessages = function(e, t) {
            t(), window.WAPI.loadAllEarlierMessages(e)
        }, window.WAPI.areAllMessagesLoaded = function(e, t) {
            return WAPI.getChat(e).msgs.msgLoadState.noEarlierMsgs ? (t && t(!0), !0) : (t && t(!1), !1)
        }, window.WAPI.loadEarlierMessagesTillDate = function(e, t, n) {
            const i = WAPI.getChat(e);
            x = function() {
                i.msgs.models[0].t > t && !i.msgs.msgLoadState.noEarlierMsgs ? i.loadEarlierMsgs().then(x) : n()
            }, x()
        }, window.WAPI.getAllGroupMetadata = function(e) {
            const t = window.Store.GroupMetadata.map(e => e.all);
            return void 0 !== e && e(t), t
        }, window.WAPI.getGroupMetadata = async function(e, t) {
            let n = window.Store.GroupMetadata.get(e);
            return void 0 !== n && n.stale && await window.Store.GroupMetadata.update(e), void 0 !== t && t(n), n
        }, window.WAPI._getGroupParticipants = async function(e) {
            return (await WAPI.getGroupMetadata(e)).participants
        }, window.WAPI.getGroupParticipantIDs = async function(e, t) {
            const n = (await WAPI._getGroupParticipants(e)).map(e => e.id);
            return void 0 !== t && t(n), n
        }, window.WAPI.getGroupAdmins = async function(e, t) {
            const n = (await WAPI._getGroupParticipants(e)).filter(e => e.isAdmin).map(e => e.id);
            return void 0 !== t && t(n), n
        }, window.WAPI.getMe = function(e) {
            const t = window.Store.Contact.get(window.Store.Conn.me);
            return void 0 !== e && e(t.all), t.all
        }, window.WAPI.isLoggedIn = function(e) {
            const t = window.Store.Contact && void 0 !== window.Store.Contact.checksum;
            return void 0 !== e && e(t), t
        }, window.WAPI.isConnected = function(e) {
            const t = null === document.querySelector('*[data-icon="alert-phone"]');
            return void 0 !== e && e(t), t
        }, window.WAPI.processMessageObj = function(e, t, n) {
            return e.isNotification ? n ? WAPI._serializeMessageObj(e) : void 0 : !1 === e.id.fromMe || t ? WAPI._serializeMessageObj(e) : void 0
        }, window.WAPI.getAllMessagesInChat = function(e, t, n, i) {
            let o = [];
            const s = WAPI.getChat(e).msgs._models;
            for (const e in s) {
                if ("remove" === e) continue;
                const i = s[e];
                let a = WAPI.processMessageObj(i, t, n);
                a && o.push(a)
            }
            return void 0 !== i && i(o), o
        }, window.WAPI.getAllMessageIdsInChat = function(e, t, n, i) {
            let o = [];
            const s = WAPI.getChat(e).msgs._models;
            for (const e in s) "remove" === e || !t && s[e].isMe || !n && s[e].isNotification || o.push(s[e].id._serialized);
            return void 0 !== i && i(o), o
        }, window.WAPI.getMessageById = function(e, t) {
            let n = !1;
            try {
                let t = window.Store.Msg.get(e);
                t && (n = WAPI.processMessageObj(t, !0, !0))
            } catch (e) {}
            if (void 0 === t) return n;
            t(n)
        }, window.WAPI.ReplyMessage = function(e, t, n) {
            var i = window.Store.Msg.get(e);
            if (void 0 === i) return void 0 !== n && n(!1), !1;
            i = i.value();
            const o = WAPI.getChat(i.chat.id);
            return void 0 !== o ? void 0 !== n ? (o.sendMessage(t, null, i).then((function() {
                var e = 0;
                ! function i() {
                    for (let e = o.msgs.models.length - 1; e >= 0; e--) {
                        let i = o.msgs.models[e];
                        if (i.senderObj.isMe && i.body == t) return n(WAPI._serializeMessageObj(i)), True
                    }
                    var s;
                    e += 1, console.log(e), e > 30 ? n(!0) : (s = 500, new Promise(e => setTimeout(e, s))).then(i)
                }()
            })), !0) : (o.sendMessage(t, null, i), !0) : (void 0 !== n && n(!1), !1)
        }, window.WAPI.sendMessageToID = function(e, t, n) {
            try {
                window.getContact = e => Store.WapQuery.queryExist(e), window.getContact(e).then(i => {
                    404 === i.status ? n(!0) : Store.FindChat.findChat(i.jid).then(e => (e.sendMessage(t), !0)).catch(i => WAPI.sendMessage(e, t) ? (n(!0), !0) : (n(!1), !1))
                })
            } catch (o) {
                if (0 === window.Store.Chat.length) return !1;
                firstChat = Store.Chat.models[0];
                var i = firstChat.id;
                return firstChat.id = "string" == typeof i ? e : new window.Store.UserConstructor(e, {
                    intentionallyUsePrivateConstructor: !0
                }), void 0 !== n ? (firstChat.sendMessage(t).then((function() {
                    firstChat.id = i, n(!0)
                })), !0) : (firstChat.sendMessage(t), firstChat.id = i, !0)
            }
            return void 0 !== n && n(!1), !1
        }, window.WAPI.sendMessage = async (e, t, n = {}) => {
            const i = new window.Store.UserConstructor(e, {
                intentionallyUsePrivateConstructor: 1
            });
            let o = await window.Store.Chat.find(i),
                s = {};
            n.attachment && (s = n.sendMediaAsSticker ? await window.WWebJS.processStickerData(n.attachment) : await window.WWebJS.processMediaData(n.attachment, {
                forceVoice: n.sendAudioAsVoice,
                forceDocument: n.sendMediaAsDocument,
                forceGif: n.sendVideoAsGif
            }), t = n.sendMediaAsSticker ? void 0 : s.preview, delete n.attachment, delete n.sendMediaAsSticker);
            let a = {};
            if (n.quotedMessageId) {
                let e = window.Store.Msg.get(n.quotedMessageId);
                e.canReply() && (a = e.msgContextInfo(o)), delete n.quotedMessageId
            }
            n.mentionedJidList && (n.mentionedJidList = n.mentionedJidList.map(e => window.Store.Contact.get(e).id));
            let r = {};
            n.location && (r = {
                type: "location",
                loc: n.location.description,
                lat: n.location.latitude,
                lng: n.location.longitude
            }, delete n.location);
            let d = {};
            if (n.contactCard) {
                let e = window.Store.Contact.get(n.contactCard);
                d = {
                    body: window.Store.VCard.vcardFromContactModel(e).vcard,
                    type: "vcard",
                    vcardFormattedName: e.formattedName
                }, delete n.contactCard
            } else if (n.contactCardList) {
                d = {
                    type: "multi_vcard",
                    vcardList: n.contactCardList.map(e => window.Store.Contact.get(e)).map(e => window.Store.VCard.vcardFromContactModel(e)),
                    body: void 0
                }, delete n.contactCardList
            } else if (n.parseVCards && "string" == typeof t && t.startsWith("BEGIN:VCARD")) {
                delete n.parseVCards;
                try {
                    const e = window.Store.VCard.parseVcard(t);
                    e && (d = {
                        type: "vcard",
                        vcardFormattedName: window.Store.VCard.vcardGetNameFromParsed(e)
                    })
                } catch (e) {}
            }
            if (n.linkPreview && (delete n.linkPreview, !window.Store.MDBackend)) {
                const e = window.Store.Validators.findLink(t);
                if (e) {
                    const t = await window.Store.Wap.queryLinkPreview(e.url);
                    t.preview = !0, t.subtype = "url", n = {
                        ...n,
                        ...t
                    }
                }
            }
            let l = {};
            if (n.buttons) {
                let e;
                e = "chat" === n.buttons.type ? t = n.buttons.body : n.caption ? n.caption : " ", l = {
                    productHeaderImageRejected: !1,
                    isFromTemplate: !1,
                    isDynamicReplyButtonsMsg: !0,
                    title: n.buttons.title ? n.buttons.title : void 0,
                    footer: n.buttons.footer ? n.buttons.footer : void 0,
                    dynamicReplyButtons: n.buttons.buttons,
                    replyButtons: n.buttons.buttons,
                    caption: e
                }, delete n.buttons
            }
            let w = {};
            if (n.list) {
                if ("smba" === window.Store.Conn.platform || "smbi" === window.Store.Conn.platform) throw "[LT01] Whatsapp business can't send this yet";
                w = {
                    type: "list",
                    footer: n.list.footer,
                    list: {
                        ...n.list,
                        listType: 1
                    },
                    body: n.list.description
                }, delete n.list, delete w.list.footer
            }
            const c = window.Store.User.getMaybeMeUser(),
                u = window.Store.MDBackend,
                g = new window.Store.MsgKey({
                    from: c,
                    to: o.id,
                    id: window.Store.MsgKey.newId(),
                    participant: u && o.id.isGroup() ? c : void 0,
                    selfDir: "out"
                }),
                f = n.extraOptions || {};
            delete n.extraOptions;
            const p = {
                ...n,
                id: g,
                ack: 0,
                body: t,
                from: c,
                to: o.id,
                local: !0,
                self: "out",
                t: parseInt((new Date).getTime() / 1e3),
                isNewMsg: !0,
                type: "chat",
                ...r,
                ...s,
                ...a,
                ...d,
                ...l,
                ...w,
                ...f
            };
            return await window.Store.SendMessage.addAndSendMsgToChat(o, p), window.Store.Msg.get(g._serialized)
        }, window.WAPI.toStickerData = async e => {
            if ("image/webp" == e.mimetype) return e;
            const t = window.WAPI.mediaInfoToFile(e),
                n = await window.Store.StickerTools.toWebpSticker(t),
                i = await n.arrayBuffer();
            return {
                mimetype: "image/webp",
                data: window.WAPI.arrayBufferToBase64(i)
            }
        }, window.WAPI.processStickerData = async e => {
            if ("image/webp" !== e.mimetype) throw new Error("Invalid media type");
            const t = window.WAPI.mediaInfoToFile(e);
            let n = await window.WAPI.getFileHash(t),
                i = await window.WAPI.generateHash(32);
            const o = new AbortController,
                s = await window.Store.UploadUtils.encryptAndUpload({
                    blob: t,
                    type: "sticker",
                    signal: o.signal,
                    mediaKey: i
                });
            return {
                ...s,
                clientUrl: s.url,
                deprecatedMms3Url: s.url,
                uploadhash: s.encFilehash,
                size: t.size,
                type: "sticker",
                filehash: n
            }
        }, window.WAPI.mediaInfoToFile = ({
            data: e,
            mimetype: t,
            filename: n
        }) => {
            const i = window.atob(e),
                o = new ArrayBuffer(i.length),
                s = new Uint8Array(o);
            for (let e = 0; e < i.length; e++) s[e] = i.charCodeAt(e);
            const a = new Blob([o], {
                type: t
            });
            return new File([a], n, {
                type: t,
                lastModified: Date.now()
            })
        }, window.WAPI.promiseSendMessage = async function(e, t, n) {
            const i = await Store.WapQuery.queryExist(e);
            if (!i || !i.jid) return !1;
            e = i.jid;
            var o = await Store.FindChat.findChat(e);
            return void 0 !== o ? void 0 !== n ? (o.sendMessage(t).then((function() {
                var e = 0;
                ! function i() {
                    for (let e = o.msgs.models.length - 1; e >= 0; e--) {
                        let i = o.msgs.models[e];
                        if (i.senderObj.isMe && i.body == t) return n(WAPI._serializeMessageObj(i)), True
                    }
                    var s;
                    e += 1, console.log(e), e > 30 ? n(!0) : (s = 500, new Promise(e => setTimeout(e, s))).then(i)
                }()
            })), !0) : (o.sendMessage(t), !0) : (void 0 !== n && n(!1), !1)
        }, window.WAPI.sendMessage2 = function(e, t, n) {
            var i = WAPI.getChat(e);
            if (void 0 !== i) try {
                return void 0 !== n ? i.sendMessage(t).then((function() {
                    n(!0)
                })) : i.sendMessage(t), !0
            } catch (e) {
                return void 0 !== n && n(!1), !1
            }
            return void 0 !== n && n(!1), !1
        }, window.WAPI.sendImageAsSticker = async function(e, t) {
            const n = window.WAPI.base64ImageToFile("data:image/webp;base64," + e, "sticker.webp"),
                i = await window.WAPI.processStickerData(e),
                o = await new Promise((e, t) => {
                    const i = new Image;
                    i.onload = function() {
                        URL.revokeObjectURL(i.src), i.width = 120, i.height = 120, e(i)
                    }, i.onerror = t, i.src = URL.createObjectURL(n)
                });
            await window.window.WAPI.sendSticker(i, t, o)
        }, window.WAPI.sendSeen = function(e, t) {
            var n = window.WAPI.getChat(e);
            return void 0 !== n ? void 0 !== t ? (void 0 === n.getLastMsgKeyForAction && (n.getLastMsgKeyForAction = function() {}), Store.SendSeen(n, !1).then((function() {
                t(!0)
            })), !0) : (Store.SendSeen(n, !1), !0) : (void 0 !== t && t(), !1)
        }, window.WAPI.getUnreadMessages = function(e, t, n, i) {
            const o = window.Store.Chat.models;
            let s = [];
            for (let i in o) {
                if (isNaN(i)) continue;
                let a = o[i],
                    r = WAPI._serializeChatObj(a);
                r.messages = [];
                const d = a.msgs._models;
                for (let n = d.length - 1; n >= 0; n--) {
                    let i = d[n];
                    if ("boolean" == typeof i.isNewMsg && !1 !== i.isNewMsg) {
                        i.isNewMsg = !1;
                        let n = WAPI.processMessageObj(i, e, t);
                        n && r.messages.push(n)
                    }
                }
                if (r.messages.length > 0) s.push(r);
                else if (n) {
                    let n = a.unreadCount;
                    for (let i = d.length - 1; i >= 0; i--) {
                        let o = d[i];
                        if (n > 0) {
                            if (!o.isSentByMe) {
                                let i = WAPI.processMessageObj(o, e, t);
                                r.messages.unshift(i), n -= 1
                            }
                        } else {
                            if (-1 !== n) break;
                            if (!o.isSentByMe) {
                                let n = WAPI.processMessageObj(o, e, t);
                                r.messages.unshift(n);
                                break
                            }
                        }
                    }
                    r.messages.length > 0 && (a.unreadCount = 0, s.push(r))
                }
            }
            return void 0 !== i && i(s), s
        }, window.WAPI.getGroupOwnerID = async function(e, t) {
            const n = (await WAPI.getGroupMetadata(e)).owner.id;
            return void 0 !== t && t(n), n
        }, window.WAPI.getCommonGroups = async function(e, t) {
            let n = [];
            groups = window.WAPI.getAllGroups();
            for (let t in groups) try {
                participants = await window.WAPI.getGroupParticipantIDs(groups[t].id), participants.filter(t => t == e).length && n.push(groups[t])
            } catch (e) {
                console.log("Error in group:"), console.log(groups[t]), console.log(e)
            }
            return void 0 !== t && t(n), n
        }, window.WAPI.getProfilePicSmallFromId = function(e, t) {
            window.Store.ProfilePicThumb.find(e).then((function(e) {
                void 0 !== e.img ? window.WAPI.downloadFileWithCredentials(e.img, t) : t(!1)
            }), (function(e) {
                t(!1)
            }))
        }, window.WAPI.getProfilePicFromId = function(e, t) {
            window.Store.ProfilePicThumb.find(e).then((function(e) {
                void 0 !== e.imgFull ? window.WAPI.downloadFileWithCredentials(e.imgFull, t) : t(!1)
            }), (function(e) {
                t(!1)
            }))
        }, window.WAPI.downloadFileWithCredentials = function(e, t) {
            let n = new XMLHttpRequest;
            n.onload = function() {
                if (4 == n.readyState)
                    if (200 == n.status) {
                        let e = new FileReader;
                        e.readAsDataURL(n.response), e.onload = function(n) {
                            t(e.result.substr(e.result.indexOf(",") + 1))
                        }
                    } else console.error(n.statusText);
                else console.log(err), t(!1)
            }, n.open("GET", e, !0), n.withCredentials = !0, n.responseType = "blob", n.send(null)
        }, window.WAPI.downloadFile = function(e, t) {
            let n = new XMLHttpRequest;
            n.onload = function() {
                if (4 == n.readyState)
                    if (200 == n.status) {
                        let e = new FileReader;
                        e.readAsDataURL(n.response), e.onload = function(n) {
                            t(e.result.substr(e.result.indexOf(",") + 1))
                        }
                    } else console.error(n.statusText);
                else console.log(err), t(!1)
            }, n.open("GET", e, !0), n.responseType = "blob", n.send(null)
        }, window.WAPI.getBatteryLevel = function(e) {
            return window.Store.Conn.plugged ? (void 0 !== e && e(100), 100) : (output = window.Store.Conn.battery, void 0 !== e && e(output), output)
        }, window.WAPI.deleteConversation = function(e, t) {
            let n = new window.Store.UserConstructor(e, {
                    intentionallyUsePrivateConstructor: !0
                }),
                i = WAPI.getChat(n);
            return i ? (window.Store.sendDelete(i, !1).then(() => {
                void 0 !== t && t(!0)
            }).catch(() => {
                void 0 !== t && t(!1)
            }), !0) : (void 0 !== t && t(!1), !1)
        }, window.WAPI.deleteMessage = function(e, t, n = !1, i) {
            let o = new window.Store.UserConstructor(e, {
                    intentionallyUsePrivateConstructor: !0
                }),
                s = WAPI.getChat(o);
            if (!s) return void 0 !== i && i(!1), !1;
            Array.isArray(t) || (t = [t]);
            let a = t.map(e => window.Store.Msg.get(e));
            return n ? s.sendRevokeMsgs(a, s) : s.sendDeleteMsgs(a, s), void 0 !== i && i(!0), !0
        }, window.WAPI.checkNumberStatus = async function(e) {
            const t = window.Store.WidUtils.createUserWid(e);
            return await window.Store.checkNumberBeta.queryExists(t)
        }, window.WAPI._newMessagesQueue = [], window.WAPI._newMessagesBuffer = null != sessionStorage.getItem("saved_msgs") ? JSON.parse(sessionStorage.getItem("saved_msgs")) : [], window.WAPI._newMessagesDebouncer = null, window.WAPI._newMessagesCallbacks = [], window.Store.Msg.off("add"), sessionStorage.removeItem("saved_msgs"), window.WAPI._newMessagesListener = window.Store.Msg.on("add", e => {
            if (e && e.isNewMsg && !e.isSentByMe) {
                let t = window.WAPI.processMessageObj(e, !1, !1);
                t && (window.WAPI._newMessagesQueue.push(t), window.WAPI._newMessagesBuffer.push(t)), !window.WAPI._newMessagesDebouncer && window.WAPI._newMessagesQueue.length > 0 && (window.WAPI._newMessagesDebouncer = setTimeout(() => {
                    let e = window.WAPI._newMessagesQueue;
                    window.WAPI._newMessagesDebouncer = null, window.WAPI._newMessagesQueue = [];
                    let t = [];
                    window.WAPI._newMessagesCallbacks.forEach((function(n) {
                        void 0 !== n.callback && n.callback(e), !0 === n.rmAfterUse && t.push(n)
                    })), t.forEach((function(e) {
                        let t = window.WAPI._newMessagesCallbacks.indexOf(e);
                        window.WAPI._newMessagesCallbacks.splice(t, 1)
                    }))
                }, 1e3))
            }
        }), window.WAPI._unloadInform = e => {
            window.WAPI._newMessagesBuffer.forEach(e => {
                Object.keys(e).forEach(t => void 0 === e[t] ? delete e[t] : "")
            }), sessionStorage.setItem("saved_msgs", JSON.stringify(window.WAPI._newMessagesBuffer)), window.WAPI._newMessagesCallbacks.forEach((function(e) {
                void 0 !== e.callback && e.callback({
                    status: -1,
                    message: "page will be reloaded, wait and register callback again."
                })
            }))
        }, window.addEventListener("unload", window.WAPI._unloadInform, !1), window.addEventListener("beforeunload", window.WAPI._unloadInform, !1), window.addEventListener("pageunload", window.WAPI._unloadInform, !1), window.WAPI.waitNewMessages = function(e = !0, t) {
            return window.WAPI._newMessagesCallbacks.push({
                callback: t,
                rmAfterUse: e
            }), !0
        }, window.WAPI.getBufferedNewMessages = function(e) {
            let t = window.WAPI._newMessagesBuffer;
            return window.WAPI._newMessagesBuffer = [], void 0 !== e && e(t), t
        }, window.WAPI.sendImage = function(e, t, n, i, o) {
            var s = new window.Store.UserConstructor(t, {
                intentionallyUsePrivateConstructor: !0
            });
            return Store.Chat.find(s).then(t => {
                var s = window.WAPI.base64ImageToFile(e, n),
                    a = new Store.MediaCollection(t);
                a.processAttachments([{
                    file: s
                }, 1], t, 1).then(() => {
                    a._models[0].sendToChat(t, {
                        caption: i
                    }), void 0 !== o && o(!0)
                })
            })
        }, window.WAPI.base64ImageToFile = function(e, t) {
            for (var n = e.split(","), i = n[0].match(/:(.*?);/)[1], o = atob(n[1]), s = o.length, a = new Uint8Array(s); s--;) a[s] = o.charCodeAt(s);
            return new File([a], t, {
                type: i
            })
        }, window.WAPI.sendSticker = async function(e, t, n) {
            var i = Store.Chat.get(t);
            let o = new window.Store.Sticker.modelClass;
            return o.deprecatedMms3Url = e.clientUrl, o.filehash = e.filehash, o.id = e.filehash, o.encFilehash = e.uploadhash, o.mediaKey = e.mediaKey, o.initialized = !1, o.mediaData.__x_mediaStage = "INIT", o.mimetype = "image/webp", o.height = n && n.height ? n.height : 512, o.width = n && n.width ? n.width : 512, await o.initialize(), await o.sendToChat(i, {
                stickerIsFirstParty: !1,
                stickerSendOrigin: 6
            })
        }, window.WAPI.sendContact = function(e, t) {
            Array.isArray(t) || (t = [t]), (t = t.map(e => WAPI.getChat(e).__x_contact)).length > 1 ? window.WAPI.getChat(e).sendContactList(t) : 1 === t.length && window.WAPI.getChat(e).sendContact(t[0])
        }, window.WAPI.getNewMessageId = function(e) {
            var t = Store.Msg.models[0].__x_id.clone();
            return t.fromMe = !0, t.id = WAPI.getNewId().toUpperCase(), t.remote = e, t._serialized = `${t.fromMe}_${t.remote}_${t.id}`, t
        }, window.WAPI.sendVCard = function(e, t) {
            var n = Store.Chat.get(e),
                i = Object.create(Store.Msg.models.filter(e => e.__x_isSentByMe)[0]),
                o = {
                    ack: 0,
                    id: window.WAPI.getNewMessageId(e),
                    local: !0,
                    self: "out",
                    t: parseInt((new Date).getTime() / 1e3),
                    to: e,
                    isNewMsg: !0
                };
            Array.isArray(t) ? (Object.assign(o, {
                type: "multi_vcard",
                vcardList: t
            }), delete o.body) : (Object.assign(o, {
                type: "vcard",
                subtype: t.displayName,
                body: t.vcard
            }), delete o.vcardList), Object.assign(i, o), n.addAndSendMsg(i)
        }, window.WAPI.contactBlock = function(e, t) {
            const n = window.Store.Contact.get(e);
            return void 0 !== n ? (n.setBlock(!0), t(!0), !0) : (t(!1), !1)
        }, window.WAPI.contactUnblock = function(e, t) {
            const n = window.Store.Contact.get(e);
            return void 0 !== n ? (n.setBlock(!1), t(!0), !0) : (t(!1), !1)
        }, window.WAPI.removeParticipantGroup = function(e, t, n) {
            window.Store.WapQuery.removeParticipants(e, [t]).then(() => {
                const e = window.Store.GroupMetadata.get(id);
                if (checkParticipant = e.participants._index[t], void 0 === checkParticipant) return n(!0), !0
            })
        }, window.WAPI.promoteParticipantAdminGroup = function(e, t, n) {
            window.Store.WapQuery.promoteParticipants(e, [t]).then(() => {
                const e = window.Store.GroupMetadata.get(id);
                return checkParticipant = e.participants._index[t], void 0 !== checkParticipant && checkParticipant.isAdmin ? (n(!0), !0) : (n(!1), !1)
            })
        }, window.WAPI.demoteParticipantAdminGroup = function(e, t, n) {
            window.Store.WapQuery.demoteParticipants(e, [t]).then(() => {
                const e = window.Store.GroupMetadata.get(id);
                return void 0 === e ? (n(!1), !1) : (checkParticipant = e.participants._index[t], void 0 !== checkParticipant && checkParticipant.isAdmin ? (n(!1), !1) : (n(!0), !0))
            })
        }, window.WAPI.mediaInfoToFile = ({
            data: e,
            mimetype: t,
            filename: n
        }) => {
            const i = atob(e),
                o = new ArrayBuffer(i.length),
                s = new Uint8Array(o);
            for (let e = 0; e < i.length; e++) s[e] = i.charCodeAt(e);
            const a = new Blob([o], {
                type: t
            });
            return new File([a], n, {
                type: t,
                lastModified: Date.now()
            })
        }, window.WAPI.getFileHash = async e => {
            let t = await e.arrayBuffer();
            const n = await crypto.subtle.digest("SHA-256", t);
            return btoa(String.fromCharCode(...new Uint8Array(n)))
        }, window.WAPI.generateHash = async e => {
            for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = n.length, o = 0; o < e; o++) t += n.charAt(Math.floor(Math.random() * i));
            return t
        }, window.WAPI.processStickerData = async e => {
            const t = window.WAPI.mediaInfoToFile({
                data: e,
                mimetype: "image/webp",
                filename: "sticker.webp"
            });
            let n = await window.WAPI.getFileHash(t),
                i = await window.WAPI.generateHash(32);
            const o = new AbortController,
                s = await window.Store.UploadUtils.encryptAndUpload({
                    blob: t,
                    type: "sticker",
                    signal: o.signal,
                    mediaKey: i
                });
            return {
                ...s,
                clientUrl: s.url,
                deprecatedMms3Url: s.url,
                uploadhash: s.encFilehash,
                size: t.size,
                type: "sticker",
                filehash: n
            }
        }, window.WAPI.joinGroupViaLink = function(e) {
            return window.Store.WapQuery.acceptGroupInvite(e.split("/").pop()).then(e => 200 === e.status ? e.gid : e.status)
        }, window.WAPI.openChat = function(e) {
            var t;
            e && ((t = document.createElement("a")).setAttribute("href", "whatsapp://send?phone=" + e), document.body.appendChild(t), t.click(), t.outerHTML = "")
        };
        const n = new CustomEvent("Ready", {
            detail: null
        });
        document.dispatchEvent(n), window.dispatchEvent(n), console.log("WAPI.js Injected")
    }
});