// selection sort
function selectionSort (arrInput) {
  let tempArray = arrInput

  for(let i = 0; i < tempArray.length; i++) {
    let smallestIdx = i
    for(let j = i; j < tempArray.length; j++) {
      if (tempArray[i] > tempArray[j]) {
        smallestIdx = j
      }
    }
    let temp = tempArray[smallestIdx]
    tempArray[smallestIdx] = tempArray[i]
    tempArray[i] = temp
  }

  return tempArray
}


/**
 * #0 smallest i=0 j=0 smallest value 5
 *  0.0 smallestIdx 0 smallest value 5 target value 5
 *  0.1 smallestIdx 1 smallest value 2 target value 2
 *  0.2 smallestIdx 1 smallest value 2 target value 6
 *  0.3 smallestIdx 3 smallest value 1 target value 1
 *  0.4 smallestIdx 3 smallest value 1 target value 3
 *  0.5 smallestIdx 3 smallest value 1 target value 6
 * 
 *  swap 0 dengan posisi 3
 * 
 *  1,2,6,5,3,6
 */


// insertion sort

function insertionSort(arr) {
  console.log(arr, 'intial arr');
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let j = i - 1
    const temp = arr[i]
    console.log(`iterasi ke ${i} , temp nya ${temp}`);
    while (j >= 0 && arr[j] > temp) { // temp < arr[j] yg sebelum nya
      console.log(`${arr[j]} > ${temp}`);
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
    console.log(arr, `end of iteration ${i}`);
  }
  return arr
}

// console.log(insertionSort([5,2,6,1,3,6]))


/**
 * 5,2,6,1,3,6
 * 
 * ** interasi pertama i=1
 * 
 * i=1 j=0 temp=2
 * arr[j]=5 temp2 arr[j] > temp
 * 
 * 2,5,6,1,3,6
 * 
 * ** iterasi ke 2 i=2
 * 
 * i=2 j=1 temp=6
 * 
 * 2,5,6,1,3,6
 * ** iterasi ke 2 i=3
 * 
 *  i=3 j=2 temp 1
 * 2,5,1,6,3,6
 * 2,1,5,6,3,6
 * 1,2,5,6,3,6
 * 
 */

// merge sort

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

// merger([5],[2]) , merge([2,6], [6])
function merge(left, right) {
  const result = [] // [2,5,6]
  //  || 6
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  return result.concat(left, right)
}

// liniar search
// 1,2,3,4,5,6,7,8 , search = 6
function linearSearch(arr, target) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1;
}

// binary search
// harus sorted

function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    console.log('left',left,'right',right, 'midIdx', mid, 'mid value', arr[mid], 'target', target);
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

// console.log(binarySearch([1,2,3,4,5,6,7,8],5));
// 0 7
// 1,2,3,4,5,6,7,8 midvalue 4 target 5
// 4 7 5
// 5,6,7,8 midvalue 6 target 5
// 4 4
// [5] 5 5

let a = [
  {
      "id": "09a0760a-ff82-44d4-9de5-e728b5b33958",
      "name": "Moch. Rezeki Setiawan",
      "email": "21082010004@student.upnjatim.ac.id",
      "university_name": "Universitas Pembangunan Nasional Veteran Jawa Timur",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 1
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6654631",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "17e79d1b-47c3-4419-80cf-cc30935b93e9",
      "name": "EKA NAZAR FAJRIANSYAH",
      "email": "ekanazarfajriansyah@gmail.com",
      "university_name": "Universitas Singaperbangsa Karawang",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 1
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6917202",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "189d0a40-7824-49f4-a747-c9e739853298",
      "name": "AMMAR ABDURAHMAN",
      "email": "ammarabdurahman98@gmail.com",
      "university_name": "Universitas Muhammadiyah Cirebon",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 0
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6497558",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "3e1b1b07-6c49-439b-894d-275ef84fe915",
      "name": "MUHAMAD AHYAR YOGI WIBISONO",
      "email": "ahyar0647@gmail.com",
      "university_name": "Universitas Sahid Surakarta",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 1
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6740252",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "45bf5140-51f9-4d4c-a19a-f6cd9663818b",
      "name": "Niken Anggraini",
      "email": "niikenanggraini56@gmail.com",
      "university_name": "Politeknik Pratama Mulia",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 0
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6603721",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "4df10bd3-fd27-4220-92ba-2f6464a5193f",
      "name": "MUHAMMAD HIBATUL WAFII",
      "email": "wafih083@gmail.com",
      "university_name": "Universitas Bina Sarana Informatika",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 2
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6638688",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "619e3565-87d9-4e57-a8dc-60c26d1f123b",
      "name": "YATIRA NDRURU",
      "email": "yatira24@gmail.com",
      "university_name": "Universitas Sari Mutiara Indonesia Medan",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 0
      },
      "evaluation_status": "UNEVALUATED",
      "image": "https://storage.googleapis.com/kampusmerdeka_kemdikbud_go_id_private/profile/profile_fd3bcde6-df6c-4c4d-bc96-44254e62d659.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=mbkm-core%40mbkm-production.iam.gserviceaccount.com%2F20231010%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231010T131327Z&X-Goog-Expires=3599&X-Goog-Signature=5e673845068e15aacfdff1b60825c94afa8e732894397943cbccc96a9040fb2bc5de5737f79ea398dd7cd962cf3fa14a39be13b5289a4cfb7796d5b9fb2542faeaa3caecb5be66ddb2e91f61b9862d6e159ae3273e5e85d55eb7d8864a6ad31f3e031d1ab503d6a821f76b31491c14fc8da896fa98b629f8dd02827a4541a82d04c976cfd6812b081ad509cd6961c1d14f3e0ca6cad53c0a03d55701be9852e285c4944b17b40f742de416d33d998246480335aef4062c896b49ef5b6103593c4d59ae74a22c255e65545a15755200e2a19eed8b6b51a17bc5a45991beb1529157b2357c7a46e2cd8961b6c3a2f0673730015a9b6ec7580d95ad17908952e507&X-Goog-SignedHeaders=host",
      "id_reg_penawaran": "6892418",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "949016b2-3cbf-4314-8257-01e96f493e3c",
      "name": "Silviana Putri Afrisia",
      "email": "vivisilviafrisia@gmail.com",
      "university_name": "Universitas Muhammadiyah Kudus",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 1
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6432597",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "97d71a47-d232-469d-ade9-61c1bebebcfb",
      "name": "DICKY GUNAWAN DESTRIANDY",
      "email": "dicky.21421056@student.ubl.ac.id",
      "university_name": "Universitas Bandar Lampung",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 0
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6878906",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "98b736ba-42b0-4648-8064-e7cbab0e5977",
      "name": "MUHAMAD RIFKI HILMAN",
      "email": "rifkyhilman265@gmail.com",
      "university_name": "Universitas Bina Sarana Informatika",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 2
      },
      "evaluation_status": "UNEVALUATED",
      "image": "https://storage.googleapis.com/kampusmerdeka_kemdikbud_go_id_private/profile/profile_0d9fb4cc-20be-47b5-8af6-f675687eda70.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=mbkm-core%40mbkm-production.iam.gserviceaccount.com%2F20231010%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231010T131327Z&X-Goog-Expires=3599&X-Goog-Signature=8ee4b82c31779bd7c692768e1839e72f2a1d8d1bd709e9149ab14d35b0072b3ccb98224604ffe8f1eb1a7269da07f13a5557c0ada352ff7d3bbecbe52f80c38f9839383d27afda9440d5ced19c36de20c1d71f3f37658068dfcc8e6f1e98dfc58239c79097be6b6a35ff59fe349a790f1a704129b7ba88e943df21aef28c7b3dcfca4f835f09e974e9c74bb28297d78f98a85a25e32eaecc7967efafcbf41260cc8e7f22f068720ff0f2edd09190a74a9d75f8d986e1a0ae6f04ed9b196ed28c4467648122d7ef1e0a79b5ff6997ad579d1b18775c7e4179fd79a2ed6abaf46da75fd4d27b8dda551045d841250dfc4ef49d78b68ef87c3988b4d580c8da38bd&X-Goog-SignedHeaders=host",
      "id_reg_penawaran": "7096921",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "9d993e7e-a14f-4f7c-bf22-4585e1c9876b",
      "name": "NADIA",
      "email": "nadia@teknokrat.ac.id",
      "university_name": "Universitas Teknokrat Indonesia",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 1
      },
      "evaluation_status": "UNEVALUATED",
      "image": "https://storage.googleapis.com/kampusmerdeka_kemdikbud_go_id_private/profile/profile_a8383962-e8d9-4451-ba2d-ed411477d5af.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=mbkm-core%40mbkm-production.iam.gserviceaccount.com%2F20231010%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231010T131327Z&X-Goog-Expires=3599&X-Goog-Signature=3f7e7d875130119b2d48b7089e5ebd0e55f82f32332b852b84c056e0f5b1fea8b435f59a01ed75a93a0a11c5d39e9393ce1135546f4d86e006e82fa2cf8ab1ba15ce70dd49f619ce1424c7de02f4f11ae62a17a18f5c30b99bcdc3ecbda51f43aedab1c1330f3a8e44b202a9081d3c88f102cc4e5f8ed937b6fc5cf1308d635874c7ad02ef0d27b74ffb3b759fffca31e8430e6e61aea9889d6f4823aeca019158016bd1f3d3abca89a87ed2b19e337d9bed41442b9fb7c1a0dd62c2132cc894751815551bbf285646cc99ddeb919bed8d44c2dcd5d6b80f5dd13af46a28b54bb7f8820699d2a19c4f038aadf332dbe6dc2594cdc547d030842c7eda4db39e1d&X-Goog-SignedHeaders=host",
      "id_reg_penawaran": "6663512",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "9f5965f9-22a4-4410-b986-cfe8865f2228",
      "name": "Putu Adi Saputra",
      "email": "putujackson0@gmail.com",
      "university_name": "Universitas Pendidikan Nasional",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 1
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6991445",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "a7d438b3-b381-4b22-b663-273382cfabfa",
      "name": "TASYALIA FAJRINA",
      "email": "2111016320010@mhs.ulm.ac.id",
      "university_name": "Universitas Lambung Mangkurat",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 0
      },
      "evaluation_status": "UNEVALUATED",
      "image": "https://storage.googleapis.com/kampusmerdeka_kemdikbud_go_id_private/profile/profile_c0a3700f-9566-405a-8195-65f9c6a29ece.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=mbkm-core%40mbkm-production.iam.gserviceaccount.com%2F20231010%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231010T131327Z&X-Goog-Expires=3599&X-Goog-Signature=7760667154c8ec10a89c3fdb61b4510bd55bcf2cfe1cdfce2c3f00349f82a71130f77e3c8db4178ef533002a89c0f6e61aa79c3338fcc2d479ec5ae770cee5adc55186a9cdf50b33f76550ecb8a3107274d9be7b0c26c47ff65502d4007deffa166173307bfe77df1634458e72407cb16650574d358a88696d88fb955da38ad0eece536e3d5bdc274d1910abf0234879461e43cf9445ff59d4f7da46b0ebc5b19a283db0773a7b2ed052f310964d69a797829efec5e9a831615b89e69a4ddc88ca4101ad017d570d23cee2fa0d6e1c1705961173b7680cf0e68649b51ed6642abdd55d21cb0e0c6025162bf7ecdf1a5250749ba56e3b350ef8ca2d3e0b74fa53&X-Goog-SignedHeaders=host",
      "id_reg_penawaran": "6615983",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "afaf0f85-036f-457f-aa64-2f96d72d44fa",
      "name": "RAFIF HUDA ADITYA",
      "email": "rafifhudaaditya@gmail.com",
      "university_name": "Universitas Islam Sultan Agung",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 1
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6635466",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "b23763d3-2ae1-43fb-a166-74664f26b1a5",
      "name": "AHMAD FARUL AZIS",
      "email": "ahmadfahrula779@gmail.com",
      "university_name": "Universitas Budi Luhur",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 1
      },
      "evaluation_status": "UNEVALUATED",
      "image": "https://storage.googleapis.com/kampusmerdeka_kemdikbud_go_id_private/profile/profile_662395d3-9fc1-4a64-aebd-670ff3237837.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=mbkm-core%40mbkm-production.iam.gserviceaccount.com%2F20231010%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231010T131327Z&X-Goog-Expires=3599&X-Goog-Signature=3faa720084fc92a3cb38885f413871878370a25b3c3d1d1ce10412bfdf8f0e211c8d9ef64f7feb224b8d00d377530901f57b9ed0ceda11aea92393b1015200b06376de9e74f7aba316bed5fe5b76343c769260b1172ad494d06c5e9f0685f96e3242bd4a66addd69e1fc00e1ddeeef494cf7d1c542627ceb18c5e2750f2dfdd7836b58ae457fd2f5907396b347c6117cff16fb0ce4f44241e826f4294dbe558a267607b4385316f452cc4813d25c18260cbc0b912b7eedafc0d6da0a9b22d81f1412687c4f8229d77c412ee7fe43e0cb9ff46aa22b21329efc6a169350cd7e1bfe1b9e7d556843c1560a2658b768e290205d728108c2a13a52819c2c2c967090&X-Goog-SignedHeaders=host",
      "id_reg_penawaran": "6655989",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "b3905fd2-1ca3-4cf9-b412-9f2811e10945",
      "name": "VINDY FELYCIA LOVERITA",
      "email": "vindyfelycia911@gmail.com",
      "university_name": "Universitas Diponegoro",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 1
      },
      "evaluation_status": "UNEVALUATED",
      "image": "https://storage.googleapis.com/kampusmerdeka_kemdikbud_go_id_private/profile/profile_d1b1ae27-0b1b-4214-acb8-a6dc642d9dcb.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=mbkm-core%40mbkm-production.iam.gserviceaccount.com%2F20231010%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231010T131327Z&X-Goog-Expires=3599&X-Goog-Signature=827dd944fae059c5955f57d4f63c09b9b10f3d1682c73ff800157022a9b435db3b43fc3c3e9cc53cb5c12a73f3c06dbda528f4557e8d2cdb61dfd48f67b2b7555df663ae8a16fe4cadd48a35c088d0f5c9b4d8364e6437d965b78a8eff738aa8eb4169acd290083fa894947d837c1949196ef109618252aed87e04791b376caa3f0f5c34a819694a7752a7bcd627a149b1dc9f62ae40661c600c45d1d59d5df0456419c5babc6b42e47bb1f4c8b30930cde44cfb8f5c59f2d1eff8500a4b4b059945f17d1815dd48c75d47ba9097e0c5563a337ae5b0b3afb2882f5445608c456874faca6f7f1b90c0d7719d6fd76b6b87076f5d26c3d7930f30317c19aeb9b9&X-Goog-SignedHeaders=host",
      "id_reg_penawaran": "6656053",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "bd4623f9-ed7e-4940-ae05-55aa801aa762",
      "name": "Katherine Febrianty S",
      "email": "kathefebsmart03@gmail.com",
      "university_name": "Universitas Advent Indonesia",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 0
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6734796",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "c3800d75-2891-4bab-9f6a-3bff6292aa0e",
      "name": "HANI FATUL HIKMAH",
      "email": "fatul2124@gmail.com",
      "university_name": "Universitas Amikom Purwokerto",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 1
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6729413",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "ccc0f4ed-89b7-4b4e-8fa9-1d6dbe8390a5",
      "name": "MUHAMMAD ABRAR ARGIANATA",
      "email": "m.abrarargianata@gmail.com",
      "university_name": "Universitas Krisnadwipayana",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 0
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6672632",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "dc3b7a3f-7816-4f7b-bc54-a4db62ed5dd3",
      "name": "Mukhammad Rivaldi Ghani",
      "email": "mrivaldighani@gmail.com",
      "university_name": "Universitas Pembangunan Nasional Veteran Jawa Timur",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 0
      },
      "evaluation_status": "UNEVALUATED",
      "image": "https://storage.googleapis.com/kampusmerdeka_kemdikbud_go_id_private/profile/profile_76aaa169-193e-4362-b826-801083365e3a.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=mbkm-core%40mbkm-production.iam.gserviceaccount.com%2F20231010%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20231010T131327Z&X-Goog-Expires=3599&X-Goog-Signature=5a3eeaeface9050f7b7d26aef51e818ca218e6b6e28a3fc5319ef73fccdece77fdf353cb5191e13bd262837bd27f08783b3943b62f0315a6b6eb694424e47f14a159274a269e959881646b2dd75dc95c4e20ccedb105a6d629354ace837138ed929c7974b644baedc090998029767080e8337d5f80b67cd442737a35e7ac5d1f764dcb7cabd9900872a3258c8f6d6126dd6e909cb7c80972f0cdb1011d08a58617a18de3a031edc48a749f7404e451a4d0a8cd0dbece40cda927ca1d9d90da63c28748d9a44c2a7dfaf458da343bafd223f97326f6d8ff73fb072c6ed55ccbcc4709cd9092819fd0a124061bb4ffe6b3191321cf0347494819ef9f3e4f497147&X-Goog-SignedHeaders=host",
      "id_reg_penawaran": "6665048",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "e2123467-b007-4785-8991-920d26ad7aba",
      "name": "ALFIAN NURDIENANSYAH SETYOBUDI",
      "email": "titanalfian112@gmail.com",
      "university_name": "Universitas Sultan Ageng Tirtayasa",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 0
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6590482",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  },
  {
      "id": "ecf38871-ddf3-4d01-a673-0c0a6006d04b",
      "name": "SYALWA CENDANA RUSLAN",
      "email": "syalwacendana423@gmail.com",
      "university_name": "Politeknik Negeri Padang",
      "activity_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "activity": "Web Developer Program",
      "position_id": "09dbf16f-d918-11ed-aa1a-364118d24148",
      "position": "",
      "program_id": "ca2d4944-1858-488e-8a9b-f5fdac2ce1d2",
      "program": "Studi Independen Digitech Development Program - Cycle 5 (Proposal Lama)",
      "report_status": {
          "unreviewed": 0
      },
      "evaluation_status": "UNEVALUATED",
      "image": "",
      "id_reg_penawaran": "6903744",
      "mentor_id": "9d29981c-0d8b-414e-8097-3bf2e8320ec3",
      "mentor_name": "Tio Rizki A",
      "type": "studi",
      "appraisal_status": "FINAL_ASSESSMENT_NOT_STARTED"
  }
]

let result = a.map(e => e.name)

console.log(result)
// Moch. Rezeki Setiawan 
// EKA NAZAR FAJRIANSYAH 
// AMMAR ABDURAHMAN 
// MUHAMAD AHYAR YOGI WIBISONO 
// Niken Anggraini 
// MUHAMMAD HIBATUL WAFII 
// YATIRA NDRURU 
// Silviana Putri Afrisia 
// DICKY GUNAWAN DESTRIANDY 
// MUHAMAD RIFKI HILMAN
// NADIA
// Putu Adi Saputra
// TASYALIA FAJRINA
// RAFIF HUDA ADITYA
// AHMAD FARUL AZIS
// VINDY FELYCIA LOVERITA
// Katherine Febrianty S
// HANI FATUL HIKMAH
// MUHAMMAD ABRAR ARGIANATA
// Mukhammad Rivaldi Ghani
// ALFIAN NURDIENANSYAH SETYOBUDI
// SYALWA CENDANA RUSLAN