* ## React State must be immutable

* ## Don't use state for everything

query selector to fetch change server state. 

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/466ce0ef-8cb1-4d5b-9a61-cdb2c12e470b)

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/215d0f9a-2635-4621-a083-dae1a6313f25)

* ## Derive values without state. we can use directly without using another hook

* ## Compute values without effects. No need to use extra set of hooks to compute the values. if complex value then use memo.
 
![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/90687fcb-a60d-4801-8123-9d7433ce948f)

* ## Key should actually be unique

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/f041b9dd-479f-4388-b828-c306d7295354)

* ## Don't leave out dependencies

dependencies are the values certain hooks need. that also in form of array. If u dont add them then its going to annoys u, provide error known as stale closure. UI not displaying in correct data and all.

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/bffd96c2-dcd8-42f2-ab53-c5e362ef5f6b)

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/bfeddbaa-892a-48b2-9c46-6ad34e879a6d)

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/63d4c369-ca9e-4d04-9145-5a6289380d92)

* ## Use useEffect Last

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/53074424-a252-473b-807d-4c31a8485a34)

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/5f77b811-e0e1-4d7e-9ec3-3e900d6aee12)
