# Madison Public Library Bibliovation Web Extension

| Current Version | Install on Google Chrome | Author |
| :-------------: | :----------------------: | :----: |
| <br>1.51         | <br>[Google Chrome](https://chrome.google.com/webstore/detail/mpl-bibliovation-extensio/https://chrome.google.com/webstore/detail/mpl-bibliovation-extensio/gnnmpgibgchafbgmlabigjdkkndgooch) | Lucas Schneider<br>Library Page II<br>MPL–Central |

MPL BibEx is a WebExtension for Firefox (58+) that adds additional features to PTFS's Bibliovation Library Services Platform. BibEx is intended for use by member libraries of the South Central Library System, and, while not supported by SCLS, it is actively developed and maintained by Lucas Schneider, a Library Page II at MPL-Central.

## Table of Contents
* [Inherent features of MPL BibEx](#inherent-features-of-mpl-bibex)
  * [Browser action button](#browser-action-button)
  * [Higher resolution logo](#higher-resolution-logo)
  * [Standardize patron record formatting](#standardize-patron-record-formatting)
  * [Sort item checkout history](#sort-item-checkout-history)
  * [Print patron barcode numbers](#print-patron-barcode-numbers)
  * [Separate hold shelf action list](#separate-hold-shelf-action-list)
  * [Find "sort 1" (PSTAT) and nearest library](#find-sort-1-pstat-and-nearest-library')
  * [Fast Bib Add barcode warning](#fast-bib-add-barcode-warning)
  * [Patron record keyboard shortcuts](#patron-record-keyboard-shortcuts)
* [Optional Features](#optional-features)
  * [Select extension logo](#select-extension-logo)
  * [Parse patron address](#parse-patron-address)
  * [Add patron messages](#add-patron-messages)
  * [Restrict fields in patron records](#restrict-fields-in-patron-records)
  * [Sunday dropbox mode](#sunday-dropbox-mode)
  * [Update patron account type](#update-patron-account-type)
* [Bug reporting and developer contact](#bug-reporting-and-deevloper-contact)
* [Disclaimer](#disclaimer)

# Inherent features of MPL BibEx
## Browser action button
An icon should be present in the top-right corner of your web browser. By default, it will be the Madison Public Library logo, but this may be changed on the extension preferences page. [Contact Lucas](mailto:lschneider@madisonpubliclibrary.org) if you would like your library's logo to be an option.

There are a number of tools and links that are accessible via the icon's dropdown panel.

<dl>
  <dt>SCLS Problem Item Form:</dt>
  <dd>Clicking this link will open a fillable SCLS Problem Item Form in a new tab. Both the patron and item data can be automatically retrieved from the barcode by clicking the button that appears after each respective field. If the item is currently checked out, retrieving data from the item barcode will also retrieve last patron data. Due to restrictions in accessing another library's item use data, use will only be retrieved if your library has permissions to edit the item's record.<br><br>When completed, the form may be sent to your receipt printer. Further instructions will appear after printing based on the type of problem (e.g. Damaged Item found in Book Drop, Parts Missing item that arrived via Transit Hold, etc.).<br><br>From any other page in Bibliovation, there are two additional ways you can initiate the Problem Item Form. Any hyperlinked barcode number and any highlighted barcode number (i.e. selected text as when copy/pasting) may be right clicked and from the context menu you may select "Use Barcode in Problem Item Form." Not only will this open the problem form in a new tab, but it will also automatically start gathering either patron or item data based on the barcode that was selected.</dd>
  <dt>Add Lost Library Card Note:</dt>
  <dd>This link will automatically generate both the circulation and OPAC notes to notify a patron that their library card was found. Just enter the name of your library location in the subsequent popup note, and the extension will fill in the rest. You must be currently editing a patron's record to use this tool.</dd>
  <dt>Set PSTAT from Alternate Address:</dt>
  <dd>When patron's have separate residential and mailing addresses, it is customary to enter the mailing address in the primary address fields, and their residential address in the alternate address fields. For statistical purposes, the "sort 1" (PSTAT) value should be based on the residential address and <b><i>not</i></b> the  mailing address. Since the PSTAT is normally automatically found using the primary address, this link is necessary to find the PSTAT when the mailing address and residential address are different. You must be currently editing a patron's record to use this tool.</dd>
  <dt>Add MPL Payment Plan Note:</dt>
  <dd>This link will automatically generate the note for setting up a Madison Public Library payment plan if you are currently editing a patron's record. A popup note will ask you to enter the initial balance on the patron's account, and the extension will fill in the rest.</dd>
</dl>

Currently, the default bookmark links available are as follows:

1. Bibliovation--Checkin
2. Bibliovation--Checkout
3. American Fact Finder (for PSTAT lookup)
4. Madison Public Library's Homepage
5. MPL staff website
6. MPL reference tools page

You may customize the bookmark links from the extension preferences page.

## Higher resolution logo
This purely cosmetic feature replaces the Bibliovation logo with a higher resolution image so that it looks less fuzzy on larger screens.

## Standardize patron record formatting
All text fields of a patron's record are made uppercase except email addresses which are made lowercase. The city and state format for the City of Madison is made "MADISON WI", and library staff may enter "mad" as a shortcut for "MADISON WI". If you forget to include the two character state code, " WI" will be automatically appended to the city.

## Sort item checkout history
When viewing an item's checkout history, you may sort the table based on the checkout date, due date, or return date in ascending or descending order. You may also group the data by barcode number and/or only show a specific barcode.

## Print patron barcode numbers
From a patron's checkout or details screen you may click a button to print their barcode number using the receipt printer. You may select from a variety of font sizes in the extension preferences.

## Separate hold shelf action list
From the extension preferences, you may select whether you would like OLL or various AV items separated from other expired holds (as many libraries shelve these hold types separate from the main collection). By default, CDs and OLL items will be separated.

## Find "sort 1" (PSTAT) and nearest library
This feature will attempt to automatically enter the zipcode and PSTAT for any address. It is important to ensure that the street address, city, and state abbreviation are entered and correctly spelled. It starts with the most recent census data, and falls back on the 2010 census data. This will look up the census tract number for Madison address, and the county subdivision for addresses both within and outside SCLS. The cities of Middleton, Sun Prairie, and Verona select the PSTAT based on the patron’s aldermanic district.

You also have the option to find the SCLS location that is geographically closest to the patron’s address. You may search among the MPL locations, within one of the seven counties, or within SCLS as a whole. This is particularly useful for reciprocal library patrons or those who have recently moved.

## Fast Bib Add barcode warning
If you try to checkout an item to a patron with a barcode that is not a 14-digit number starting with "3", a warning is displayed on the Fast Bib Add popup message warning that this is not a standard barcode number. This feature is designed to help prevent staff from creating fast-adds from raw RFID tags, which show as a 14 character string, usually starting with "E".

## Patron record keyboard shortcuts
| Key Command      | Function |
| ---------------- | -------- |
| [CTRL] + [SPACE] | Prompts the user to save a patron's record |
| [ESC]            | Cancels editing a patron's record and returns to their overview page |

# Optional Features
## Parse patron address
When creating or updating a patron record, compare their address against MPL's list of dorms, restricted addresses, and unacceptable addresses. Dorm addresses are given a special expiration date of May 15 of that academic year. Restricted addresses are automatically made limited use, and unacceptable addresses trigger the save button to be hidden (which could be overridden by staff). In each of these cases, staff are notified of the nature of the address, and a circulation note is automatically entered into the patron's record.

## Add patron messages
This option adds additional canned messages frequently used by MPL staff:

* "Patron has signed Laptop/iPad Loan Agreement form. Form on file."
* "Mail returned by PO. Holds, if any, are suspended and notices are deactivated."
* "Card was mailed to patron to establish proof of address, but was ret'd by PO. Card is now at MAD. When patron provides new address, please contact MAD-CIRC so card can be mailed again."
* "Email address not recognized, unable to send notices. Verify that mailing address and phone are correct. Enter new email address. Holds, if any, are suspended. Previous email was: "
* "Email box is full; unable to send notices by email. Holds, if any, are suspended. Email was: "

## Restrict fields in patron records
This feature disables many of the rarely used input fields which appear while editing a patron’s record. This encourages library staff to maintain a consistent system of data entry across patron accounts. This may be overridden to enable all input fields by checking the checkbox at the top of the patron edit page. Web-use only accounts have a greater number of disabled fields.

## Sunday dropbox mode
Automatically checks "Dropbox Mode" on Sundays. If enabled, unchecking the box for dropbox mode on Sundays will disable it for 3 minutes (unless manually enabled).

## Update patron account type
This feature will allow you to update a patron's account type from juvenile to adult or limited use juvenile to limited use upon saving their record if the patron is at least 16 years old on the day you are editing their record.

# Bug reporting and developer contact
This web extension is developed by Lucas Schneider, a Library Page II at Madison Central Library. You may email Lucas comments, questions, or feature requests to [lschneider@madisonpubliclibrary.org](mailto:lschneider@madisonpubliclibrary.org).

# Disclaimer
This extension has been vetted for security by SCLS, however, it is neither supported nor endorsed by PTFS/LibLime or SCLS. It is independently developed by Lucas Schneider, a Library Page at MPL-Central. Please use the extension only at the discretion of your circulation or departmental supervisor.
