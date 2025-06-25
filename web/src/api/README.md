# Achievement Boards
### Quicklinks
[Someone recieved a pin](#adding-a-pin)
[New Pin Type](#to-add-a-new-pin-type)
[New achievement board](#to-add-a-new-member/achievement-board)

## Adding a Pin
1. Navigate to the pin logs sheet in Awesome Achievements Pin Tracking
2. Add a row to the table, filling out the recipient, pin type, date recieved, why they recieved it, and whether or not it has been delivered.
   <img width="1399" alt="Screenshot 2025-06-25 at 1 54 11 PM" src="https://github.com/user-attachments/assets/c4d20dce-558a-4c07-8cf9-3fa6cf7c32c3" />
   The pin should now be viewable on the appropritate member's achievement board.

## To add a new pin type
1. Add a new row to the pin database sheet in Awesome Achievements Pin Tracking with the name, how to earn the pin and a pin code for it.
2. Upload an image of the pin to https://postimg.cc/gallery/6RDKPct using either a personal or the dev@awesomeinc.org account. Either will work, we just need the second link after uploading under "share"
<img width="953" alt="Screenshot 2025-06-25 at 1 30 36 PM" src="https://github.com/user-attachments/assets/fcb341ba-aae4-4792-a153-99f387e63222" />
<img width="1209" alt="Screenshot 2025-06-25 at 1 32 29 PM" src="https://github.com/user-attachments/assets/eb346600-3828-4306-9292-6017a0d2e41b" />
Your pin should now be an option in the pin logs sheet and will apply to the achievement boards automatically!

## To add a new member/achievement board
1. In the 'team database' sheet, simply add the team member's name which will appear on the achievement board.
   <img width="519" alt="Screenshot 2025-06-25 at 1 41 03 PM" src="https://github.com/user-attachments/assets/347292b2-6aaf-4655-a4b7-45a63af7e45d" />
2. Either 1) navigate to the Sanity dashboard if you have access or 2) inquire the services of someone whomst has access to the Sanity database, usually Kyle or a member of the dev team can.
3. In the netlify project, navigate to Be Awesome > About > Team Members
   <img width="1373" alt="Screenshot 2025-06-25 at 1 46 22 PM" src="https://github.com/user-attachments/assets/3eff1583-a51b-4867-a391-ee423633186b" />
4. If the team member does not yet exist in the sanity database, proceed to fill out this form as fit.
**Note: The last field, called Pin Tracker Recipient Name must exactly match the name put into the team database or the achievement board will not load.**[^1]
5. Pubish the Sanity document and the team member will now be selectable in pin logs!

[^1]: For devs, this is because we use the google sheet for tracking the pins and Sanity to ensure the team member exists. Removing one source of truth will streamline the member adding process and make it easier for non devs.
