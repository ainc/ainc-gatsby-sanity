const fs = require('fs');
const matter = require('gray-matter');

// Directory path containing MD files
const mdDirectory = "./_blog/";

// Array to store the extracted data
const data = [];

// Read the files within the directory
const fileNames = fs.readdirSync( mdDirectory);

// Process each MD file
fileNames.forEach((fileName) => {
  // Check if the file has an MD extension
  if (fileName.endsWith('.md')) {
    // Read the MD file content
    const filePath = mdDirectory + fileName;
    const mdContent = fs.readFileSync(filePath, 'utf8');

    // Parse the front matter and content from the MD file using gray-matter
    const { data: frontmatter, content } = matter(mdContent);

    frontmatter.slug = frontmatter.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')

    var json = [
      
    {"_createdAt":"2023-06-22T16:45:15Z",id:"af897750-462d-48f5-bea6-3fe2355fde6d","_rev":"oqbn77-r3p-qdj-ux7-j56omszvi","_type":"blogAuthor","_updatedAt":"2023-06-22T16:45:15Z",author:"Christian Beck"},
    {"_createdAt":"2023-06-22T16:45:38Z",id:"f4e4d990-4424-48cb-9b59-77c553c43fa3","_rev":"hyq5xt-tmu-1xl-31j-o540epgvl","_type":"blogAuthor","_updatedAt":"2023-06-22T16:45:38Z",author:"Mallory Quisenberry"},
    {"_createdAt":"2023-06-22T16:45:01Z",id:"a7a17c07-1489-4d31-bd2d-ce9abdfc7c8c","_rev":"52lnjv-ot0-pq7-pru-2r7oobs4z","_type":"blogAuthor","_updatedAt":"2023-06-22T16:45:01Z",author:"Heather Seaton & Liz Brown Evans"},
    {"_createdAt":"2023-06-22T16:45:51Z",id:"a593b646-63ff-4309-9bd6-446a542be6de","_rev":"enrgh2-jbo-s58-fm2-l67pfx4cb","_type":"blogAuthor","_updatedAt":"2023-06-22T16:47:28Z",author:"Mackenzie Hanes","picture":{"_sanityAsset":"image@file://./images/7f6a6a7c449013367b88bd094041d88882420a8b-2725x2725.jpg","_type":"image"}},
    {"_createdAt":"2023-06-22T16:46:03Z",id:"7daa612b-694f-436c-94c3-5a9f50ca88fe","_rev":"1hynxk-hqg-cil-u3v-k4pmoft9l","_type":"blogAuthor","_updatedAt":"2023-06-22T16:46:45Z",author:"Tom Stern"},
    {"_createdAt":"2023-06-22T16:46:33Z",id:"bb5efb82-bd0a-41ab-ac34-1afacc82b567","_rev":"6qbpvx-lkd-ob6-5rg-rr05dbvlk","_type":"blogAuthor","_updatedAt":"2023-06-22T16:47:01Z",author:"Conner Jones","picture":{"_sanityAsset":"image@file://./images/148e59329afef27f25ea25625b8ebd36344144b4-2541x2541.jpg","_type":"image"}},
    {"_createdAt":"2023-06-22T16:47:48Z",id:"289dfbd3-9f4b-414c-bcda-0433c70eebed","_rev":"82r0bp-rxn-fv1-pb9-8ma6ygr8l","_type":"blogAuthor","_updatedAt":"2023-06-22T16:47:48Z",author:"Heather Seaton"},
    {"_createdAt":"2023-06-22T16:48:28Z",id:"a635e567-96fa-4b5d-91ce-cb01555f3b82","_rev":"v3f30j-1pt-505-gzy-rmpkplsgl","_type":"blogAuthor","_updatedAt":"2023-06-22T16:48:40Z",author:"Camden Sloss","picture":{"_sanityAsset":"image@file://./images/2e8215fdc8232eb92afbb2a348ee5885681ebeba-1070x1011.jpg","_type":"image"}},
    {"_createdAt":"2023-06-22T16:49:24Z",id:"d4ef2831-5c27-4336-80d0-ee0174f9a373","_rev":"ypcm8a-grs-05n-86s-lty928n5t","_type":"blogAuthor","_updatedAt":"2023-06-22T16:49:24Z",author:"Chatty Garrate"},
    {"_createdAt":"2023-06-22T16:48:58Z",id:"9a9e90d6-ea32-44c0-bbbd-552af979512d","_rev":"jwmqz1-l4x-sid-1ii-s3gh53rro","_type":"blogAuthor","_updatedAt":"2023-06-22T16:48:58Z",author:"Vanessa Holwell"},
    {"_createdAt":"2023-06-22T16:50:49Z",id:"eee7c095-86d5-4411-bb78-5b228c854a4a","_rev":"pg85s2-8v4-lvk-tqq-mk7v72l4d","_type":"blogAuthor","_updatedAt":"2023-06-22T16:50:49Z",author:"Kennedi Brookins"},
    {"_createdAt":"2023-06-22T16:49:49Z",id:"493bd294-2d07-413b-a3ab-e1dd72b4a676","_rev":"armg6p-ezv-516-xx4-501lf8273","_type":"blogAuthor","_updatedAt":"2023-06-22T16:49:53Z",author:"Luke Murray"},
    {"_createdAt":"2023-06-22T16:50:09Z",id:"0d0df757-5e07-45f3-8bb5-506308b7786f","_rev":"ylb6j3-koa-bdf-f8o-wyl4zxj0i","_type":"blogAuthor","_updatedAt":"2023-06-22T16:50:09Z",author:"Justin Hall"},
    {"_createdAt":"2023-06-22T16:50:31Z",id:"88302b16-603a-4c90-ba8a-81de654f5df0","_rev":"j0lri2-k5s-s2s-g10-7yyustn03","_type":"blogAuthor","_updatedAt":"2023-06-22T16:50:31Z",author:"Andy Kennedy"},
    {"_createdAt":"2023-06-22T16:51:32Z",id:"684735f1-1e1f-4c3d-bed1-6ee8b24bbe61","_rev":"e4f9a7-p9i-ssw-gvr-psfab9fds","_type":"blogAuthor","_updatedAt":"2023-06-22T16:51:32Z",author:"Carly Guggenheim"},
    {"_createdAt":"2023-06-22T16:51:19Z",id:"11e3f410-a945-4e34-befb-bbf413498587","_rev":"q2cskf-moc-pq9-94g-iaxt1ccer","_type":"blogAuthor","_updatedAt":"2023-06-22T16:51:19Z",author:"Liz Brown Evans"},
    {"_createdAt":"2023-06-22T16:51:50Z",id:"9ea62caa-d970-477d-8c5b-d51672698492","_rev":"cdzqfy-l6f-ipx-eq8-cr7jd9oag","_type":"blogAuthor","_updatedAt":"2023-06-22T16:51:50Z",author:"Kyle Raney"},
    {"_createdAt":"2023-06-22T16:53:47Z",id:"3a7da0a7-c158-45ed-a269-69f8e7e7ddf0","_rev":"z50guc-khq-okw-r29-mk19indii","_type":"blogAuthor","_updatedAt":"2023-06-22T16:53:47Z",author:"Melanie Stoeckle"},
    {"_createdAt":"2023-06-22T16:53:21Z",id:"7ea335d9-ce68-40e1-bd57-a2d5009069fc","_rev":"55qog4-a19-brg-akb-m3qmhkaqh","_type":"blogAuthor","_updatedAt":"2023-06-22T16:53:26Z",author:"Kevin Mansur","picture":{"_sanityAsset":"image@file://./images/3c01f50064378a3bcb8b56d4584fe2ad691780b9-3877x3877.jpg","_type":"image"}},
    {"_createdAt":"2023-06-22T16:54:24Z",id:"cf32bc8d-033e-4a7e-a64a-fabe7b48f9b3","_rev":"re3rfu-kuv-fcv-j0o-59fesbak4","_type":"blogAuthor","_updatedAt":"2023-06-22T16:54:24Z",author:"Kerek Plummer"},
    {"_createdAt":"2023-06-22T16:57:21Z",id:"7c5f2e56-4488-4845-975d-01d49f22de85","_rev":"20zrci-f47-vys-nnu-sbay549zd","_type":"blogAuthor","_updatedAt":"2023-06-22T16:57:23Z",author:"Kevin Moore"},
    {"_createdAt":"2023-06-22T16:58:14Z",id:"cdcf264c-924c-40cc-b492-f38ee2b54df5","_rev":"hiks87-3eb-oht-cps-h79nyaslo","_type":"blogAuthor","_updatedAt":"2023-06-22T16:58:14Z",author:"Lindsey Grass"},
    {"_createdAt":"2023-06-22T16:59:02Z",id:"1d429d5c-2055-4d01-b2ae-27dded38e13b","_rev":"lin3k8-m8g-oth-h71-q4b3e9fxw","_type":"blogAuthor","_updatedAt":"2023-06-22T16:59:02Z",author:"Autumn Hines"},
    {"_createdAt":"2023-04-10T21:58:54Z",id:"4f6fc2c9-2980-4b68-9eb8-0b1b661dd194","_rev":"SmPITB92PCr5r7guzEp2Ta","_type":"blogAuthor","_updatedAt":"2023-04-10T22:06:17Z",author:"Will Garman","picture":{"_sanityAsset":"image@file://./images/ad5d7e75521a8e8960147cc44d2040adf6182a9d-432x432.jpg","_type":"image"},"title":"Web Developer"},
    {"_createdAt":"2023-04-10T22:07:03Z",id:"965750b5-0d33-460e-9429-1402c815a1e3","_rev":"hPMFYzf07LR1LZXhK6joPu","_type":"blogAuthor","_updatedAt":"2023-04-10T22:07:03Z",author:"Keith McMunn","picture":{"_sanityAsset":"image@file://./images/160e55c8c029ceb33c9d97fb0911cdf70d39ff5f-200x200.jpg","_type":"image"},"title":"Fellowship Director"},
    {"_createdAt":"2023-06-22T17:52:48Z",id:"b9c06bab-517e-483b-9a26-6030226d5fb9","_rev":"hfavss-wzp-aui-j41-t80oy7ivv","_type":"blogAuthor","_updatedAt":"2023-06-22T17:52:50Z",author:"Awesome Inc Team"},
    {"_createdAt":"2023-06-22T16:11:59Z",id:"20e94f0a-9132-4783-835d-a58cb5605db8","_rev":"2pkpjx-hg9-5ff-tip-gxyzeg9fj","_type":"blogAuthor","_updatedAt":"2023-06-22T16:31:32Z",author:"Steve Osowicz"},
    {"_createdAt":"2023-06-15T18:43:37Z",id:"77584be7-eff9-4a01-a0c2-de0fa06eb3fb","_rev":"irgtsv-o59-66n-pgl-g163xtvux","_type":"blogAuthor","_updatedAt":"2023-06-22T16:30:59Z",author:"Nick Such","picture":{"_sanityAsset":"image@file://./images/f0eed96b4be883c65e47128751daf588f470794a-200x200.jpg","_type":"image"}},
    {"_createdAt":"2023-06-22T16:31:55Z",id:"cc5ebe27-a9e3-4358-921f-98ec355962a9","_rev":"6uke16-ijt-ggg-qvk-lfwhz0p93","_type":"blogAuthor","_updatedAt":"2023-06-22T16:31:55Z",author:"Sarah Hoffman"},
    {"_createdAt":"2023-06-22T16:32:06Z",id:"84387566-9de1-4c7f-a43d-3f6d07f1c5a6","_rev":"2jvvnn-gjr-k0c-y6c-gh88vzy58","_type":"blogAuthor","_updatedAt":"2023-06-22T16:32:06Z",author:"Will Oldham"},
    {"_createdAt":"2023-06-22T16:34:24Z",id:"15c3abcf-a447-48b1-b2cb-a8883feeadcb","_rev":"8uo36q-tbj-zdv-oca-semk02vew","_type":"blogAuthor","_updatedAt":"2023-06-22T16:34:24Z",author:"Isaac Rowe"},
    {"_createdAt":"2023-06-22T16:33:16Z",id:"5f680b5d-5328-45e4-ae65-10c163cd3cc4","_rev":"pilovr-hgp-oqi-rjr-1nbbz9j2b","_type":"blogAuthor","_updatedAt":"2023-06-22T16:33:37Z",author:"Brian Raney","picture":{"_sanityAsset":"image@file://./images/4c568c6b11e5fd9115d6febd806c753e4046c6ad-200x200.jpg","_type":"image"}},
    {"_createdAt":"2023-06-22T16:32:29Z",id:"cf1b7f6d-4741-45e4-8585-5db37b0e7c41","_rev":"v5gp62-o4e-r5u-sr0-yy1the5c9","_type":"blogAuthor","_updatedAt":"2023-06-22T16:32:29Z",author:"Danny Thorne"},
    {"_createdAt":"2023-06-22T16:32:59Z",id:"b9191071-0156-4ff0-806a-4d7f379a5eea","_rev":"fep04w-erm-st8-u56-74tiyfqzo","_type":"blogAuthor","_updatedAt":"2023-06-22T16:32:59Z",author:"Ben Jacoby"},
    {"_createdAt":"2023-06-22T16:33:56Z",id:"ccf29c2f-6e72-45d1-8e95-b78bc6243839","_rev":"ljulhf-s3t-ku5-kx1-shfn6j91w","_type":"blogAuthor","_updatedAt":"2023-06-22T16:33:56Z",author:"Sarah Brookbank"},
    {"_createdAt":"2023-06-22T16:34:43Z",id:"1acd480f-f8e5-44c6-b560-84ebe94abff6","_rev":"q5junn-8mu-h0s-nl8-c3hmzzeyt","_type":"blogAuthor","_updatedAt":"2023-06-22T16:34:43Z",author:"Gregory Petitt"},
    {"_createdAt":"2023-06-22T16:35:26Z",id:"fe32df58-ab4b-403c-8ff1-81db793f2084","_rev":"nb4zyr-8us-gru-t9c-8sxiun4dn","_type":"blogAuthor","_updatedAt":"2023-06-22T16:35:26Z",author:"Aayat Ali"},
    {"_createdAt":"2023-06-22T16:35:37Z",id:"a5712ae1-3efa-4950-b4b4-3108326ed8d1","_rev":"8ykbzv-rho-aaf-xq9-g8le93y4r","_type":"blogAuthor","_updatedAt":"2023-06-22T16:35:37Z",author:"Ross Ladenburger"},
    {"_createdAt":"2023-06-22T16:36:43Z",id:"4a7d7b95-ae44-40e2-b57a-60029482d886","_rev":"sb2t51-usn-mv8-7dy-jyxsn9coc","_type":"blogAuthor","_updatedAt":"2023-06-22T16:43:12Z",author:"Stephen Ruh","picture":{"_sanityAsset":"image@file://./images/3cb8defe32f60c45cd05d03c7b710a818caf1170-500x500.jpg","_type":"image"}},
    {"_createdAt":"2023-06-22T16:39:04Z",id:"1fc257f8-8515-460c-96d2-f1c7d6765f06","_rev":"l5dryr-dtv-rlo-rdi-54opokn60","_type":"blogAuthor","_updatedAt":"2023-06-22T16:39:04Z",author:"Mike Hilton"},
    {"_createdAt":"2023-06-22T16:39:45Z",id:"6bceada5-d984-4d6f-9a12-774f3ab1ceaf","_rev":"q24h9v-thu-mlv-8iv-ktl61wop5","_type":"blogAuthor","_updatedAt":"2023-06-22T16:39:45Z",author:"Maggie Bessette"},
    {"_createdAt":"2023-06-22T16:39:26Z",id:"b13dc708-3acb-4106-ae06-55bb9efe840c","_rev":"ktst4d-ujn-fue-cai-j7rc90js6","_type":"blogAuthor","_updatedAt":"2023-06-22T16:39:26Z",author:"Kara Smith"},
    {"_createdAt":"2023-06-22T16:39:58Z",id:"f89c9b1d-ab5c-46b3-8674-3c33a3ababf7","_rev":"gtifjq-4nu-y6m-qjn-b4qe5vt0v","_type":"blogAuthor","_updatedAt":"2023-06-22T16:42:11Z",author:"Hannah Eberts","picture":{"_sanityAsset":"image@file://./images/ffe0b6a7f84c6f01a81e3b5c301118641b00ff5f-1230x1230.png","_type":"image"}},
    {"_createdAt":"2023-06-22T16:41:31Z",id:"f7022ab2-be7c-48b4-8c05-57899a216157","_rev":"pnm74t-1m6-goy-ggm-j0enzbopg","_type":"blogAuthor","_updatedAt":"2023-06-22T16:42:03Z",author:"Jacqueline Benson","picture":{"_sanityAsset":"image@file://./images/7ab44fdb4044d720e9fb403441213ca44a021f94-200x200.jpg","_type":"image"}},
    {"_createdAt":"2023-06-22T16:41:41Z",id:"4d18f997-74bd-493c-9189-ed048487f167","_rev":"thl74s-74g-rh0-j5b-b3tjjo278","_type":"blogAuthor","_updatedAt":"2023-06-22T16:41:53Z",author:"Garrett Fahrbach","picture":{"_sanityAsset":"image@file://./images/fa3f45850a01e24f9e6354cdf39dc4057ac4655e-200x200.jpg","_type":"image"}},
    {"_createdAt":"2023-06-22T16:43:42Z",id:"430a1574-9c08-45ab-9dba-8de283aa87e0","_rev":"yucl1s-sfm-ftl-7o7-b9mj1xg1q","_type":"blogAuthor","_updatedAt":"2023-06-22T16:43:42Z",author:"Jordan Weiter"},

          
  ]
  frontmatter.reference="b9c06bab-517e-483b-9a26-6030226d5fb9";

 
  for (var item in json){
    if (json[item].author == frontmatter.author){
      frontmatter.reference = json[item].id
      // console.log(json[item])
      }
 
  }

  if (frontmatter.header_img == undefined){
    frontmatter.header_img = "/images/logos/Awesome-Inc-Logo-1400x1400(1).png"
  }

  const authorString = String(frontmatter.author)

    // Create an object with the extracted data
    const jsonData = {
      _type: "blog",
      date: frontmatter.date.toISOString().slice(0,10),
      // author: authorString.split(',')[0].trim(),
      // image: frontmatter.author_img,
      reference: {_ref: frontmatter.reference},
      title: frontmatter.title, 
      slug: {current: frontmatter.slug},
      previewText: content.slice(0,77)+"...",
      // thumbnail:{"_sanityAsset":"image@file://./production-export-2023-06-22t17-34-24-823z/images/0d6376f204ba749bcfbb383cd9e0f92e6f9aefcb-500x500.jpg","_type":"image"},
      thumbnail:{"_sanityAsset":"image@file://."+ frontmatter.header_img,"_type":"image"},

      body: content
      // ...frontmatter,
    };

    // Add the data to the array
    data.push(jsonData);
  }
});

// Convert the array of data into NDJSON format
const ndjsonContent = data.map((item) => JSON.stringify(item)).join('\n');

// Write the NDJSON content to a file
const ndjsonFilePath = './output_blog.ndjson';
fs.writeFileSync(ndjsonFilePath, ndjsonContent);

console.log('Conversion completed successfully.');



