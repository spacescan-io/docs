---
sidebar_position: 2
---

# test2

CAT information can be updated by clicking the [Add Token](https://www.spacescan.io/xch/catInfo) dropdown present inside the Tokens navigation bar.

![Add token nav bar](/img/updatecatinfodetails/Addtokennavbar.png)
 
This page will redirect to the update cat page, if the user is logged in to the spacescan explorer else 
it will redirect the user to the login page. 

## Log in to spacescan.io
 
For logging into spacescan.io website, user needs a valid e-mail id and password. 
we will send a verfication code to the provided email-id. 
Once the user is signed up to the spacescan.io website, [Add Token](https://www.spacescan.io/xch/catInfo) page will be enabled for the user to edit their CAT details. 

## Udpate your CAT.

Every CAT has a unique asset id. This asset id is used for updating the CAT information. 

- Provide your Asset ID. 

![Asset ID bar](/img/updatecatinfodetails/asset_id_bar.png)

- All the other details of the CAT can be updated only after providing a valid asset id. 

- Once the asset id is provided, it will undergo a check to verify this CAT is owned by anyone else.

- If no user is tagged to this particular CAT asset id, the user can update the CAT with valid details.

- If any owner is present for the CAT asset id, the user can only view the details of the CAT with a warning. 

![Not a owner error](/img/updatecatinfodetails/notownererror.png)

- User can edit/update the CAT information only for 5 times. If the user exceeds this limit, the CAT information cannot be 
edited by the user untill it is revoked by the spacescan.io team. 

- For updating the CAT details beyond the limit, Contact the spacescan.io team at [discord](https://discord.com/invite/Bb4sj3Bg9P), [twitter](https://twitter.com/spacescan_io) or at `spacescan.io@gmail.com`

- Every CAT details require a CAT logo. Without providing a CAT logo, CAT details cannot be updated. 

## Mandatory fields 

Few of the fields in the CAT update page are made as required to have a increased user experience. 

- Asset ID (Without this no other details are editable)
- Asset Name
- Asset Logo or Image
- Asset Tag

Without these fields, the user cannot update the CAT details. 

## After Update Success

Once the CAT details are updayed successfully.

- The user can see a success warning popping in the screen for reference

- CAT details that are updated will be visible under the [Top Tokens page](https://www.spacescan.io/xch/cat1/topTokens) page after 10 minuntes. 

- User can search their CAT details by providing their asset ID in the search box present in the [Top Tokens page](https://www.spacescan.io/xch/cat1/topTokens)

:::tip TIP

For better performance and results, There is a caching mechanism spacescan follow.  
Each cat update will take 1 hour to see the changes in cat summary page.
Please wait for 1 hour before checking the cat info and don't update the same information again during this time period. This will reduce your total CAT update limit (**Max-limit:** 5 times/cat owner)

:::