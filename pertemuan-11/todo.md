1. fetch data dari 'https://jsonplaceholder.typicode.com/users'
 - fetch function, ref: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 - url: https://jsonplaceholder.typicode.com/users
 - parsing
  - table (id, name, username,email, address, domain)
 - store --> final result
2. loop dan render ke table di DOM
- table
- dengan table header (id, name, username,email, address, domain)
- cara bikin table gimana di html ?
- cara append gimana ?
- kira kira looping nanti bakal append ke element mana ?
- bikin function yang nge loop si data terus append ke tbody
 - pake forEach
 - bentuk yang bakal kita append ke tbody itu kaya gimana ?
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  - td nya ini nanti kita innerHTML kita set pake value dari object person hasil looping an
3. button sort, field+button filter, field+button find
 - button sort sort si table by name
 - bikin button
 - si button kita pasangin function tadi
 - function buat nge sort data nya by nama - pusing
 - gimana sih cara kerja sort() di javascript
 - remove child dari element // thanks to random person on the internet
 - embed sorted people nya ke table

 - bikin button find
  - nyari si button
  - pasangin function nya
  - function di beresin find
  - dia bakal ambil value di input text
  - cara bikin input
  - cara dapetin value dari input text gimana ?
  - terus ngefind di globalPeople
  - embed di table
#Ref
https://jsonplaceholder.typicode.com/