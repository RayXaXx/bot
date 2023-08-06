let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('265' || '265')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('972' || '972')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('1' || '1')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('52' || '52')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('55' || '55')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('59' || '59')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('56' || '56')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('54' || '54')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('591' || '591')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('57' || '57')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('506' || '506')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('593' || '593')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('58' || '58')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('502' || '502')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('598' || '598')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('503' || '503')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('33' || '33')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('44' || '44')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('994' || '994')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗]SOLO QUIERO PERUANOS EN ESTE GRUPO, SERAS ELIMINADO.*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
}}
handler.register = false
export default handler
