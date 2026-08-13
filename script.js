/* =====================================================
   DATA
===================================================== */
const categories = [
  {
    id:"passport", name:"Passport", tab:"MOFA",
    icon:'<path d="M6 4h16a2 2 0 012 2v20a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" stroke-width="1.6"/><circle cx="14" cy="13" r="3.4" stroke="currentColor" stroke-width="1.5"/><line x1="9" y1="21" x2="19" y2="21" stroke="currentColor" stroke-width="1.5"/><line x1="9" y1="24" x2="19" y2="24" stroke="currentColor" stroke-width="1.5"/>',
    blurb:"New, renewal, or lost passport",
    variants:[
      { id:"new", label:"New passport", fee:"PKR 4,500 (Normal, 5-yr, 36-page)", time:"~3–4 weeks (Normal)", office:"Passport & Immigration Office",
        items:[
          {name:"Original CNIC / CRC (for minors - photo/biometric required for ages 3+)", required:true},
          {name:"Computerised online passport application form", required:true, note:"Generated from the DGIP online portal before your appointment"},
          {name:"Passport-size photograph (matte, white background)", required:true},
          {name:"Proof of payment / bank challan", required:true},
          {name:"NOC from concerned department (for government/semi-government employees)", required:false, note:"Required if employed in government, semi-government, or autonomous body"},
          {name:"Father/guardian CNIC copy (for minors)", required:false},
          {name:"Old passport (if previously issued and expired)", required:false},
        ],
        tips:["Book your token/appointment online before visiting to skip the queue.","Urgent and Fast Track categories cost more but cut processing time significantly.","Photos taken at the office counter are usually accepted — you don't need to bring your own.","Children aged 3+ must have a photo/biometric CRC — old B-Forms are no longer accepted."]
      },
      { id:"renewal", label:"Renewal", fee:"PKR 4,500 (Normal)", time:"~3–4 weeks (Normal)", office:"Passport & Immigration Office",
        items:[
          {name:"Original current passport", required:true},
          {name:"Original CNIC", required:true},
          {name:"Computerised renewal application form", required:true},
          {name:"Proof of payment / bank challan", required:true},
          {name:"Photocopy of passport's data page", required:false},
        ],
        tips:["You can apply for renewal up to 6 months before expiry.","If your old passport is damaged, mention this at the counter — treatment differs slightly from routine renewal."]
      },
      { id:"lost", label:"Lost / damaged", fee:"PKR 4,500 + late/lost surcharge", time:"~4–6 weeks", office:"Passport & Immigration Office",
        items:[
          {name:"Original CNIC", required:true},
          {name:"FIR / lost report from police station", required:true, note:"Required specifically for lost passports"},
          {name:"Computerised application form (Lost/Damaged category)", required:true},
          {name:"Affidavit explaining circumstances of loss", required:true},
          {name:"Photocopy of the lost passport, if available", required:false},
        ],
        tips:["File the police report as soon as you notice the passport missing — it's needed before you can apply.","Lost passport cases typically take longer to process than routine renewals."]
      }
    ]
  },
  {
    id:"cnic", name:"CNIC / NADRA", tab:"NADRA",
    icon:'<rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" stroke-width="1.6"/><circle cx="11" cy="16" r="3" stroke="currentColor" stroke-width="1.4"/><line x1="17" y1="13" x2="24" y2="13" stroke="currentColor" stroke-width="1.4"/><line x1="17" y1="17" x2="24" y2="17" stroke="currentColor" stroke-width="1.4"/><line x1="17" y1="20" x2="22" y2="20" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"New ID, renewal, modification, or child registration",
    variants:[
      { id:"new-adult", label:"New CNIC (18+)", fee:"PKR 750 (Normal)", time:"~15 working days (Normal)", office:"NADRA Registration Centre",
        items:[
          {name:"Form-B / original B-Form", required:true},
          {name:"Father's CNIC (original + photocopy)", required:true},
          {name:"Mother's CNIC (original + photocopy)", required:false, note:"Some centres request this alongside father's CNIC"},
          {name:"Proof of residence (utility bill / rent agreement)", required:false},
          {name:"Two passport-size photographs", required:false, note:"Most centres now capture your photo digitally at the counter"},
        ],
        tips:["Book a token via the NADRA app to avoid long waits at busy centres.","Bring the original documents — photocopies alone aren't accepted for verification."]
      },
      { id:"renewal-mod", label:"Renewal / modification", fee:"PKR 750–1,500 depending on urgency", time:"~15 working days (Normal)", office:"NADRA Registration Centre",
        items:[
          {name:"Existing/expired CNIC (original)", required:true},
          {name:"Modification form (for name, address, or marital status changes)", required:false},
          {name:"Supporting proof for the change", required:true, note:"E.g. marriage certificate for marital status, degree/affidavit for name correction"},
          {name:"Proof of current residence", required:false},
        ],
        tips:["Modification requests often need extra supporting documents specific to what's being changed — check with the counter first.","Urgent/Executive categories process faster for an additional fee."]
      },
      { id:"child", label:"Child registration (B-Form)", fee:"PKR 50–250", time:"~7–10 working days", office:"NADRA Registration Centre",
        items:[
          {name:"Child's original birth certificate", required:true},
          {name:"Father's CNIC (original + photocopy)", required:true},
          {name:"Mother's CNIC (original + photocopy)", required:true},
          {name:"Hospital birth record or vaccination card", required:false},
        ],
        tips:["Both parents' CNICs must be valid (not expired) for the system to link the child's record.","B-Form is required before applying for the child's first passport."]
      }
    ]
  },
  {
    id:"license", name:"Driving License", tab:"TRAFFIC",
    icon:'<rect x="4" y="7" width="24" height="16" rx="2" stroke="currentColor" stroke-width="1.6"/><circle cx="10" cy="15" r="2.6" stroke="currentColor" stroke-width="1.4"/><line x1="16" y1="12" x2="24" y2="12" stroke="currentColor" stroke-width="1.4"/><line x1="16" y1="16" x2="24" y2="16" stroke="currentColor" stroke-width="1.4"/><line x1="6" y1="27" x2="26" y2="27" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"Learner permit, permanent license, or renewal",
    variants:[
      { id:"learner", label:"Learner permit", fee:"PKR 100–300", time:"Same day", office:"Traffic Police / Excise & Taxation office",
        items:[
          {name:"Original CNIC", required:true},
          {name:"Application form", required:true},
          {name:"Medical fitness certificate", required:false, note:"Sometimes required for heavy/commercial categories"},
          {name:"Passport-size photographs", required:false},
        ],
        tips:["Learner permits are typically valid for 6 months, within which you must pass the driving test.","You must hold a learner permit for at least a set waiting period before applying for a permanent license."]
      },
      { id:"permanent", label:"Permanent license", fee:"PKR 1,300–2,000 (varies by province)", time:"Same day to a few weeks depending on province", office:"Traffic Police / Excise & Taxation office",
        items:[
          {name:"Learner permit (original)", required:true},
          {name:"Original CNIC", required:true},
          {name:"Passed driving test confirmation", required:true},
          {name:"Application form", required:true},
          {name:"Passport-size photographs", required:false},
        ],
        tips:["Book your practical test slot in advance — some cities have long waiting lists.","License categories (car, motorcycle, heavy) each need a separate test."]
      },
      { id:"renewal-lic", label:"Renewal", fee:"PKR 1,000–1,800", time:"Same day", office:"Traffic Police / Excise & Taxation office",
        items:[
          {name:"Expired or expiring license (original)", required:true},
          {name:"Original CNIC", required:true},
          {name:"Application form", required:true},
          {name:"Medical certificate", required:false, note:"Usually required if renewing after a long lapse or for older applicants"},
        ],
        tips:["Renewing within the grace period after expiry avoids a late-renewal penalty.","Some provinces now allow renewal through an online portal — check before visiting in person."]
      }
    ]
  },
  {
    id:"domicile", name:"Domicile Certificate", tab:"REVENUE",
    icon:'<path d="M16 4l11 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V10l11-6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><rect x="13" y="18" width="6" height="8" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"Proof of permanent residence for jobs, admissions, and quotas",
    variants:[
      { id:"standard", label:"Standard application", fee:"PKR 200–500", time:"2–4 weeks", office:"Office of the Tehsildar / Revenue office",
        items:[
          {name:"Original CNIC", required:true},
          {name:"Father's domicile certificate (copy)", required:true, note:"Used to establish family residency history"},
          {name:"Proof of permanent residence (land record / utility bill)", required:true},
          {name:"Two passport-size photographs", required:true},
          {name:"Character certificate", required:false, note:"Requested by some Tehsildar offices, not all"},
          {name:"School leaving certificate", required:false},
        ],
        tips:["Processing runs through the local Patwari before reaching the Tehsildar — building in extra time helps.","Keep photocopies of everything; originals are usually returned after verification."]
      }
    ]
  },
  {
    id:"birth", name:"Birth Certificate", tab:"UC/NADRA",
    icon:'<circle cx="16" cy="11" r="4.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 27c0-5 4-8.5 9-8.5s9 3.5 9 8.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    blurb:"First-time registration or a duplicate copy",
    variants:[
      { id:"new-birth", label:"New registration", fee:"PKR 50–200 (varies by union council)", time:"1–2 weeks", office:"Union Council / NADRA e-Sahulat",
        items:[
          {name:"Hospital birth record or midwife certificate", required:true},
          {name:"Parents' CNICs (original + photocopy)", required:true},
          {name:"Union Council registration form", required:true},
          {name:"Vaccination card", required:false},
        ],
        tips:["Registering within a month of birth is usually faster and cheaper than late registration.","Late registrations (after 1 year) may need an additional affidavit and small penalty fee."]
      },
      { id:"duplicate-birth", label:"Duplicate copy", fee:"PKR 100–300", time:"Same day to 1 week", office:"Union Council / NADRA e-Sahulat",
        items:[
          {name:"Original CNIC of applicant or parent", required:true},
          {name:"Original registration number / old copy if available", required:false},
          {name:"Application form for duplicate issuance", required:true},
        ],
        tips:["If you don't remember the registration number, the counter can look it up using CNIC and date of birth."]
      }
    ]
  },
  {
    id:"marriage", name:"Marriage Registration", tab:"UC",
    icon:'<circle cx="11" cy="14" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="21" cy="14" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M4 27c0-4 3-6.5 7-6.5s7 2.5 7 6.5M14 27c0-4 3-6.5 7-6.5s7 2.5 7 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    blurb:"Nikah Nama registration and certified copies",
    variants:[
      { id:"nikah", label:"Nikah Nama registration", fee:"PKR 500–1,000 (Union Council fee, varies)", time:"1–3 weeks", office:"Union Council (via registered Nikah Khawan)",
        items:[
          {name:"CNICs of both spouses (original + photocopy)", required:true},
          {name:"CNICs of two witnesses from each side", required:true},
          {name:"Signed Nikah Nama form", required:true, note:"Filled and signed by the Nikah Khawan at the ceremony"},
          {name:"Passport-size photographs of both spouses", required:false},
        ],
        tips:["The registered Nikah Khawan is responsible for submitting the form to the Union Council — confirm they've done this.","Keep a certified photocopy of the Nikah Nama for visa, bank, and passport processes."]
      },
      { id:"certified-copy", label:"Certified copy", fee:"PKR 100–300", time:"Same day to a few days", office:"Union Council",
        items:[
          {name:"CNIC of applicant", required:true},
          {name:"Nikah registration number, if known", required:false},
          {name:"Application for certified copy", required:true},
        ],
        tips:["The Union Council that originally registered the marriage is usually where you must request the certified copy."]
      }
    ]
  },
  {
    id:"police-verification", name:"Police Verification", tab:"POLICE",
    icon:'<path d="M12 2L3 7v6c0 5 3.5 9 9 11 5.5-2 9-6 9-11V7l-9-5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    blurb:"Character certificate, tenant verification, or employment screening",
    variants:[
      { id:"character", label:"Character certificate", fee:"PKR 200–500", time:"1–2 weeks", office:"Local police station / SP office",
        items:[
          {name:"Original CNIC", required:true},
          {name:"Application form", required:true},
          {name:"Two passport-size photographs", required:true},
          {name:"Proof of residence", required:true},
          {name:"CNIC copies of two references", required:false},
        ],
        tips:["Apply at the police station that has jurisdiction over your residential address.","Some districts now offer online character certificate applications — check your local police website."]
      },
      { id:"tenant", label:"Tenant verification", fee:"PKR 100–300", time:"3–7 days", office:"Local police station",
        items:[
          {name:"Tenant's CNIC (original + copy)", required:true},
          {name:"Landlord's CNIC (copy)", required:true},
          {name:"Rental agreement / lease copy", required:true},
          {name:"Two photographs of tenant", required:true},
        ],
        tips:["Landlords are legally required to submit tenant verification in many cities.","Keep a copy of the submitted form as proof of compliance."]
      }
    ]
  },
  {
    id:"fbr-tax", name:"Tax Registration", tab:"FBR",
    icon:'<rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 12h16M8 16h16M8 20h12" stroke="currentColor" stroke-width="1.4"/><circle cx="18" cy="9" r="3" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"NTN registration, tax filing, or tax clearance",
    variants:[
      { id:"ntn", label:"NTN registration", fee:"Free", time:"Same day (online)", office:"FBR online portal / Regional Tax Office",
        items:[
          {name:"CNIC (original + copy)", required:true},
          {name:"Mobile number registered in your name", required:true},
          {name:"Email address", required:true},
          {name:"Bank account details", required:false},
        ],
        tips:["NTN registration is now completely online through the FBR Iris portal.","You'll receive your NTN via SMS and email immediately after registration."]
      },
      { id:"tax-clearance", label:"Tax clearance certificate", fee:"Free", time:"1–3 days", office:"FBR online / Regional Tax Office",
        items:[
          {name:"NTN certificate", required:true},
          {name:"CNIC copy", required:true},
          {name:"Last tax return filed", required:true},
          {name:"Bank statements (if requested)", required:false},
        ],
        tips:["Tax clearance certificates are often needed for business loans, property transfers, and government tenders.","Ensure all previous tax returns are filed before applying for clearance."]
      }
    ]
  },
  {
    id:"property", name:"Property Transfer", tab:"REVENUE",
    icon:'<path d="M4 28V8l14-4v24" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M18 28V12l10 4v12" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 12h8M6 16h8M6 20h8M22 20h4M22 24h4" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"Property registration, transfer, or mutation",
    variants:[
      { id:"transfer", label:"Property transfer", fee:"2-5% of property value (varies by province)", time:"2–8 weeks", office:"Registrar / Sub-Registrar office",
        items:[
          {name:"Original title deed / sale deed (Bay-Nama)", required:true},
          {name:"CNICs of buyer, seller, and witnesses", required:true},
          {name:"Recent Fard (land record extract)", required:true},
          {name:"Property tax clearance certificate / Non-Demand Certificate (NDC)", required:true},
          {name:"Stamp papers of required value", required:true},
          {name:"Encumbrance certificate (confirming no legal disputes)", required:true},
          {name:"NOC from housing society/development authority", required:false, note:"Required for properties in housing societies"},
          {name:"Recent passport-size photographs of buyer and seller", required:false},
          {name:"Power of Attorney (if transaction through an agent)", required:false},
        ],
        tips:["Get your property documents verified by a lawyer before the transfer.","Stamp duty rates vary by province and property type — confirm exact amount beforehand.","Mutation (Intiqal) must be completed after transfer to update land records."]
      },
      { id:"mutation", label:"Mutation (Intiqal)", fee:"PKR 500–2,000", time:"2–4 weeks", office:"Tehsildar / Patwari office",
        items:[
          {name:"Original sale deed / registry", required:true},
          {name:"CNIC of applicant", required:true},
          {name:"Recent Fard", required:true},
          {name:"Inheritance proof (if mutation due to death)", required:false},
        ],
        tips:["Mutation must be completed within 6 months of property transfer to avoid penalties.","Keep copies of all submitted documents — they're often requested again during verification."]
      }
    ]
  },
  {
    id:"vehicle", name:"Vehicle Registration", tab:"EXCISE",
    icon:'<rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 8l2-4h12l2 4" stroke="currentColor" stroke-width="1.6"/><circle cx="9" cy="18" r="1.6" stroke="currentColor" stroke-width="1.4"/><circle cx="23" cy="18" r="1.6" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"New registration, transfer, or duplicate registration book",
    variants:[
      { id:"new-vehicle", label:"New registration", fee:"1-3% of vehicle value", time:"1–2 weeks", office:"Excise & Taxation office",
        items:[
          {name:"Original invoice from dealer", required:true},
          {name:"CNIC of owner", required:true},
          {name:"Customs clearance (for imported vehicles)", required:false},
          {name:"Insurance documents", required:true},
          {name:"Application form", required:true},
        ],
        tips:["Dealers often handle the registration process — confirm before paying extra for this service.","Registration fees vary significantly between provinces and vehicle types."]
      },
      { id:"transfer-vehicle", label:"Transfer", fee:"PKR 1,000–5,000", time:"1–2 weeks", office:"Excise & Taxation office",
        items:[
          {name:"Original registration book", required:true},
          {name:"CNICs of buyer and seller", required:true},
          {name:"Transfer forms (signed by both parties)", required:true},
          {name:"Vehicle inspection certificate", required:true},
          {name:"Proof of tax clearance", required:true},
        ],
        tips:["Both buyer and seller must be present at the office for verification.","Ensure all previous taxes are paid before initiating transfer."]
      }
    ]
  },
  {
    id:"power-attorney", name:"Power of Attorney", tab:"COURT",
    icon:'<path d="M6 4h20v24H6a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" stroke-width="1.6"/><path d="M10 10h12M10 16h12M10 22h8" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"General or special power of attorney",
    variants:[
      { id:"general", label:"General power of attorney", fee:"PKR 500–1,500", time:"1–3 days", office:"Notary public / Registrar office",
        items:[
          {name:"CNIC of principal (person giving power)", required:true},
          {name:"CNIC of attorney (person receiving power)", required:true},
          {name:"Two passport-size photographs of both parties", required:true},
          {name:"Draft of power of attorney", required:true},
          {name:"Two witnesses with CNICs", required:true},
        ],
        tips:["Clearly define the scope of powers being granted to avoid misuse.","Register the power of attorney for property matters to make it legally binding."]
      },
      { id:"special", label:"Special power of attorney", fee:"PKR 500–1,000", time:"1–2 days", office:"Notary public",
        items:[
          {name:"CNIC of principal", required:true},
          {name:"CNIC of attorney", required:true},
          {name:"Specific task description", required:true},
          {name:"Two witnesses", required:true},
        ],
        tips:["Special power of attorney is limited to specific tasks — ideal for one-time transactions.","Notarization is usually sufficient for most non-property matters."]
      }
    ]
  },
  {
    id:"arms-license", name:"Arms License", tab:"MOI",
    icon:'<path d="M6 12h20l-2 8H8l-2-8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 12l2-6h12l2 6M12 5V3h8v2" stroke="currentColor" stroke-width="1.6"/>',
    blurb:"New license, renewal, or transfer of arms",
    variants:[
      { id:"new-arms", label:"New arms license", fee:"PKR 2,000–10,000 (varies by type)", time:"2–6 months", office:"Ministry of Interior / Home Department",
        items:[
          {name:"Application form (handwritten or typed)", required:true, note:"Addressed to Section Officer (Arms), Ministry of Interior"},
          {name:"CNIC (photocopy, attested)", required:true},
          {name:"Two recent passport-size photographs", required:true},
          {name:"Police clearance / character certificate", required:true},
          {name:"Affidavit (attested by Notary Public)", required:true},
          {name:"Certificate of Profession / Service", required:true},
          {name:"NTN Certificate (for taxpayers only)", required:false},
          {name:"DCO / DC / PA Report", required:false, note:"Required for final approval"},
        ],
        tips:["Arms license processing involves multiple levels of verification and takes months.","Licenses are categorized by weapon type — ensure you apply for the correct category.","Apply at the Deputy Commissioner's office or online if available in your province."]
      },
      { id:"renewal-arms", label:"Renewal", fee:"PKR 1,000–5,000", time:"1–2 months", office:"Ministry of Interior / Home Department",
        items:[
          {name:"Original arms license", required:true},
          {name:"CNIC copy", required:true},
          {name:"Weapon details verification", required:true},
          {name:"Renewal application form", required:true},
        ],
        tips:["Apply for renewal at least 2 months before expiry to avoid penalties.","Keep your weapon's serial number and purchase documents ready for verification."]
      }
    ]
  },
  {
    id:"education-attestation", name:"Document Attestation", tab:"MOFA",
    icon:'<path d="M12 4L3 9l9 5 9-5-9-5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 12v6c0 2 3 4 6 4s6-2 6-4v-6" stroke="currentColor" stroke-width="1.6"/><path d="M22 9v8" stroke="currentColor" stroke-width="1.6"/>',
    blurb:"Degree, transcript, or certificate attestation",
    variants:[
      { id:"degree", label:"Degree attestation", fee:"PKR 500–2,000", time:"1–2 weeks", office:"HEC / MOFA / relevant embassy",
        items:[
          {name:"Original degree + photocopy", required:true},
          {name:"CNIC copy", required:true},
          {name:"HEC attestation (for higher education)", required:true},
          {name:"IBCC attestation (for intermediate/O-levels)", required:false},
          {name:"Passport copy (for foreign use)", required:false},
        ],
        tips:["Attestation requirements differ based on destination country — check embassy requirements first.","Start the attestation process early as it often requires multiple office visits."]
      },
      { id:"transcript", label:"Transcript attestation", fee:"PKR 300–1,000", time:"3–10 days", office:"HEC / Board office",
        items:[
          {name:"Original transcript", required:true},
          {name:"CNIC copy", required:true},
          {name:"Degree copy", required:true},
          {name:"Application form", required:true},
        ],
        tips:["Some universities offer transcript attestation services directly through their registrar office.","Keep both original and multiple photocopies for different attestation stages."]
      }
    ]
  },
  {
    id:"frc", name:"Family Registration", tab:"NADRA",
    icon:'<circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.6"/><circle cx="6" cy="20" r="3" stroke="currentColor" stroke-width="1.6"/><circle cx="18" cy="20" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M12 12v5M6 17v-6M18 17v-6" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"Family tree certificate for visas and immigration",
    variants:[
      { id:"frc-basic", label:"FRC (Basic)", fee:"PKR 1,000", time:"1–2 weeks", office:"NADRA Registration Centre",
        items:[
          {name:"CNIC of head of family", required:true},
          {name:"CNICs of all family members", required:true},
          {name:"B-Forms of minor children", required:true},
          {name:"Application form", required:true},
        ],
        tips:["FRC comes in three types: by birth, by marriage, or by adoption.","Apply at any NADRA centre — the record is linked to your family tree in their database."]
      }
    ]
  },
  {
    id:"nicop-poc", name:"NICOP / POC", tab:"NADRA",
    icon:'<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.6"/><path d="M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"Overseas Pakistani identity cards",
    variants:[
      { id:"nicop-new", label:"New NICOP", fee:"PKR 5,000–10,000", time:"2–4 weeks", office:"NADRA online / Pakistani embassy",
        items:[
          {name:"Valid passport (Pakistani)", required:true},
          {name:"Proof of foreign residence", required:true},
          {name:"Photograph (digital or printed)", required:true},
          {name:"Previous CNIC/NICOP if any", required:false},
        ],
        tips:["NICOP is mandatory for Pakistanis holding dual nationality.","You can apply entirely online through the NADRA portal."]
      },
      { id:"poc", label:"POC (Pakistan Origin Card)", fee:"PKR 8,000–15,000", time:"3–6 weeks", office:"NADRA online / embassy",
        items:[
          {name:"Foreign passport", required:true},
          {name:"Proof of Pakistani origin", required:true},
          {name:"Parents' Pakistani documents", required:true},
          {name:"Photographs", required:true},
        ],
        tips:["POC is for foreigners of Pakistani origin who don't hold Pakistani citizenship.","POC allows visa-free entry to Pakistan and property ownership rights."]
      }
    ]
  },
  {
    id:"business-registration", name:"Business Registration", tab:"SECP",
    icon:'<rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" stroke-width="1.6"/><path d="M8 12h16M8 16h16M8 20h12" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"Company registration, partnership, or sole proprietorship",
    variants:[
      { id:"company", label:"Company registration", fee:"PKR 2,000–10,000", time:"1–2 weeks", office:"SECP online portal",
        items:[
          {name:"CNICs/NICOPs of all directors and shareholders", required:true},
          {name:"Three proposed company names (in order of preference)", required:true, note:"For SECP name availability check"},
          {name:"Memorandum of Association (MoA)", required:true},
          {name:"Articles of Association (AoA)", required:true},
          {name:"Registered office address proof (utility bill or rent agreement)", required:true},
          {name:"NOC/Letter of Intent/License (for specialized businesses)", required:false, note:"Required for regulated sectors"},
        ],
        tips:["Company registration is now fully online through SECP's eServices portal.","Reserve your company name first before drafting documents.","Foreign directors must provide attested passport copies."]
      },
      { id:"sole", label:"Sole proprietorship", fee:"PKR 500–1,000", time:"Same day", office:"Local chamber of commerce",
        items:[
          {name:"CNIC copy", required:true},
          {name:"Business name proposal", required:true},
          {name:"Proof of business address", required:true},
          {name:"Bank account in business name", required:false},
        ],
        tips:["Sole proprietorship is the simplest business structure with minimal paperwork.","Register with your local chamber of commerce for official recognition."]
      }
    ]
  },
  {
    id:"death-certificate", name:"Death Certificate", tab:"UC/NADRA",
    icon:'<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.6"/><path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="1.6"/>',
    blurb:"Death registration and certificate issuance",
    variants:[
      { id:"death-reg", label:"Death registration", fee:"PKR 50–200", time:"1–2 weeks", office:"Union Council / NADRA",
        items:[
          {name:"Hospital death certificate", required:true},
          {name:"Deceased person's CNIC", required:true},
          {name:"Applicant's CNIC", required:true},
          {name:"Graveyard receipt (if applicable)", required:false},
        ],
        tips:["Register the death within 30 days to avoid complications.","The death certificate is essential for inheritance, pension, and property matters."]
      }
    ]
  },
  {
    id:"divorce", name:"Divorce Registration", tab:"UC",
    icon:'<path d="M8 8l16 16M24 8L8 24" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="16" cy="16" r="8" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"Divorce registration and certificate",
    variants:[
      { id:"divorce-reg", label:"Divorce registration", fee:"PKR 200–500", time:"1–2 weeks", office:"Union Council / Arbitration Council",
        items:[
          {name:"CNICs of both parties", required:true},
          {name:"Nikah Nama (original)", required:true},
          {name:"Written divorce notice", required:true},
          {name:"Witness statements", required:false},
        ],
        tips:["Divorce must be registered within 90 days of pronouncement.","Both parties will receive notices from the Union Council for reconciliation proceedings."]
      }
    ]
  },
  {
    id:"land-record", name:"Land Record", tab:"REVENUE",
    icon:'<path d="M4 28V12l8-8v24M12 28V8l8 4v16M20 28V16l8 6v6" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
    blurb:"Property ownership proof and land records",
    variants:[
      { id:"fard", label:"Fard Malkiat", fee:"PKR 100–500", time:"1–3 days", office:"Patwari / Land Record Centre",
        items:[
          {name:"CNIC copy", required:true},
          {name:"Property details / Khewat number", required:true},
          {name:"Application form", required:true},
        ],
        tips:["Fard is essential for property verification before purchase.","Many districts now offer online Fard through the Punjab Land Records Authority."]
      }
    ]
  },
  {
    id:"succession", name:"Succession Certificate", tab:"COURT",
    icon:'<path d="M12 4v16M4 8v16M20 8v16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 24h8" stroke="currentColor" stroke-width="1.6"/>',
    blurb:"Inheritance and legal heir documentation",
    variants:[
      { id:"succession-cert", label:"Succession certificate", fee:"PKR 1,000–5,000", time:"2–6 months", office:"Civil Court / NADRA",
        items:[
          {name:"Death certificate of deceased", required:true},
          {name:"CNIC cancellation certificate of deceased (issued by NADRA)", required:true},
          {name:"CNICs of all legal heirs", required:true},
          {name:"Family Registration Certificate (FRC)", required:true},
          {name:"Property/assets details (movable and immovable)", required:true},
          {name:"Signed consent form from all legal heirs", required:false},
        ],
        tips:["Succession certificates are required to transfer assets of deceased persons.","Hire a lawyer familiar with succession laws to expedite the process.","All legal heirs must be present for biometric verification at NADRA."]
      }
    ]
  },
  {
    id:"fir", name:"FIR Copy", tab:"POLICE",
    icon:'<path d="M4 4h16v16H8l-4 4V4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 10h8M8 14h8M8 18h6" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"First Information Report for lost documents or incidents",
    variants:[
      { id:"fir-copy", label:"FIR copy", fee:"Free", time:"Same day", office:"Police station / online portal",
        items:[
          {name:"CNIC of complainant", required:true},
          {name:"Details of incident/loss", required:true},
          {name:"Any supporting evidence", required:false},
        ],
        tips:["FIR can be filed online in many cities through police portals.","Keep multiple certified copies — they're often requested by different offices."]
      }
    ]
  },
  {
    id:"income-cert", name:"Income Certificate", tab:"REVENUE",
    icon:'<path d="M4 24V12l8-4 8 4v12" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M4 24h24" stroke="currentColor" stroke-width="1.6"/>',
    blurb:"Proof of income for scholarships or aid",
    variants:[
      { id:"income", label:"Income certificate", fee:"PKR 100–300", time:"3–7 days", office:"Tehsildar / Magistrate office",
        items:[
          {name:"CNIC copy", required:true},
          {name:"Proof of income sources", required:true},
          {name:"Family details", required:true},
          {name:"Application form", required:true},
        ],
        tips:["Income certificates are commonly required for scholarships and financial aid.","Be prepared to provide detailed information about all family income sources."]
      }
    ]
  },
  {
    id:"disability", name:"Disability Certificate", tab:"HEALTH",
    icon:'<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.6"/><path d="M8 8l8 8M8 16l8-8" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"Special person registration and benefits",
    variants:[
      { id:"disability-cert", label:"Disability certificate", fee:"Free", time:"1–2 weeks", office:"District Health Office / Social Welfare",
        items:[
          {name:"CNIC copy (or B-Form/CRC for minors)", required:true},
          {name:"Five passport-size photographs", required:true},
          {name:"Medical assessment report / medical history", required:true},
          {name:"Educational certificates", required:true},
          {name:"Proof of age (birth certificate)", required:true},
          {name:"Guardian's CNIC (if applicant is under 18)", required:false},
          {name:"Family Registration Certificate (if applicable)", required:false},
        ],
        tips:["Disability certificates enable access to various government benefits and concessions.","Assessment is done by a medical board — schedule an appointment first.","Keep 5 copies of each document as multiple offices require them."]
      }
    ]
  },
  {
    id:"overseas-employment", name:"Overseas Employment", tab:"BEOE",
    icon:'<circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M4 28c0-4 3-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="1.6"/><path d="M12 24l2-2 2 2" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"Protector of Emigrants registration",
    variants:[
      { id:"protector", label:"Protector registration", fee:"PKR 2,000–5,000", time:"1–2 weeks", office:"Bureau of Emigration & Overseas Employment",
        items:[
          {name:"Valid Pakistani passport (original)", required:true},
          {name:"CNIC (original and copy)", required:true},
          {name:"Employment contract / Foreign Service Agreement (FSA)", required:true},
          {name:"Work visa or work permit", required:true},
          {name:"Medical fitness certificate", required:true},
          {name:"Insurance certificate (State Life Insurance Corporation)", required:true},
          {name:"Welfare fund slip (receipt)", required:true},
          {name:"Adhesive stamp (of required value)", required:true},
          {name:"Soft Skills Certificate", required:true, note:"Mandatory for protector stamp issuance"},
          {name:"CNIC of next of kin", required:false},
        ],
        tips:["Registration with Protector of Emigrants is mandatory for most overseas employment.","Verify your employer through the Bureau before signing any contract.","The e-Protector System now allows digital registration — check the BEOE website."]
      }
    ]
  },
  {
    id:"hajj", name:"Hajj Registration", tab:"MOFA",
    icon:'<path d="M12 4c-4 4-4 8 0 12 4-4 4-8 0-12z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="16" r="4" stroke="currentColor" stroke-width="1.4"/>',
    blurb:"Hajj and Umrah application process",
    variants:[
      { id:"hajj-govt", label:"Government Hajj scheme", fee:"PKR 800,000–1,200,000", time:"Application: 1–2 months", office:"Ministry of Religious Affairs",
        items:[
          {name:"CNIC (front and back images to upload)", required:true},
          {name:"Recent passport-size photograph", required:true},
          {name:"Blood group information", required:true},
          {name:"CNIC and contact number of next of kin", required:true},
          {name:"Mobile number and email address (for verification)", required:true},
          {name:"Valid passport (for Hajj booking stage — NOT required at initial registration)", required:false, note:"Passport required only at the final booking stage, valid until at least November 2027"},
        ],
        tips:["Government Hajj scheme has limited seats — apply early when announced.","Private Hajj operators offer different packages with varying prices and services.","Passport is NOT required at the initial registration stage — only at the booking stage."]
      },
      { id:"umrah", label:"Umrah", fee:"PKR 300,000–800,000", time:"Depends on package", office:"Travel agent / Ministry",
        items:[
          {name:"Valid passport", required:true},
          {name:"Umrah visa", required:true},
          {name:"Hotel booking confirmation", required:true},
          {name:"Flight tickets", required:true},
          {name:"Vaccination certificate", required:false},
        ],
        tips:["Umrah visas are now easily available through authorized travel agents.","Saudi Arabia has streamlined the Umrah process — multiple-entry visas are available."]
      }
    ]
  },
  {
    id:"vaccination", name:"Vaccination Certificate", tab:"HEALTH",
    icon:'<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.6"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    blurb:"International vaccination certificate",
    variants:[
      { id:"yellow-fever", label:"Yellow fever certificate", fee:"PKR 500–1,000", time:"Same day", office:"Designated health office / airport",
        items:[
          {name:"Valid passport", required:true},
          {name:"CNIC copy", required:true},
          {name:"Previous vaccination records", required:false},
        ],
        tips:["Yellow fever vaccination is required for travel to certain African and South American countries.","Get vaccinated at least 10 days before travel for the certificate to be valid."]
      },
      { id:"covid", label:"COVID-19 certificate", fee:"Free (government)", time:"Same day (digital)", office:"NADRA / Health department",
        items:[
          {name:"CNIC", required:true},
          {name:"Vaccination record", required:true},
          {name:"Passport (for international certificate)", required:false},
        ],
        tips:["COVID certificates are available digitally through the NADRA and NCOC portals.","Download and print multiple copies for international travel."]
      }
    ]
  }
];

/* =====================================================
   STATE
===================================================== */
let checkedState = {}; // key: `${categoryId}:${variantId}:${itemIndex}` -> bool

function flattenSearchIndex(){
  const rows = [];
  categories.forEach(cat=>{
    cat.variants.forEach(v=>{
      rows.push({catId:cat.id, catName:cat.name, variantId:v.id, label:v.label});
    });
  });
  return rows;
}
const searchIndex = flattenSearchIndex();

/* =====================================================
   RENDER: HOME
===================================================== */
function renderCategoryGrid(){
  const grid = document.getElementById('category-grid');
  grid.innerHTML = categories.map(cat=>`
    <div class="tab-card" data-tab="${cat.tab}" onclick="openCategory('${cat.id}')">
      <svg class="tab-icon" viewBox="0 0 32 32" fill="none">${cat.icon}</svg>
      <h3>${cat.name}</h3>
      <p>${cat.blurb}</p>
    </div>
  `).join('');
}

function updateTotalCount(){
  const total = categories.reduce((sum,c)=>sum+c.variants.length,0);
  document.getElementById('checklist-total-count').textContent = `${total} checklists ready, updated for 2026`;
}

/* =====================================================
   SEARCH
===================================================== */
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', ()=>{
  const q = searchInput.value.trim().toLowerCase();
  if(!q){ searchResults.classList.remove('show'); searchResults.innerHTML=''; return; }
  const matches = searchIndex.filter(row =>
    row.catName.toLowerCase().includes(q) || row.label.toLowerCase().includes(q)
  ).slice(0,8);

  if(matches.length===0){
    searchResults.innerHTML = `<div class="search-empty">No exact match — browse categories below instead.</div>`;
  } else {
    searchResults.innerHTML = matches.map(m=>`
      <button onclick="openCategory('${m.catId}','${m.variantId}')"><b>${m.catName}</b> — ${m.label}</button>
    `).join('');
  }
  searchResults.classList.add('show');
});

document.addEventListener('click', (e)=>{
  if(!e.target.closest('.search-wrap')){ searchResults.classList.remove('show'); }
});

/* =====================================================
   CHECKLIST VIEW
===================================================== */
let currentCat = null;
let currentVariant = null;

function openCategory(catId, variantId){
  currentCat = categories.find(c=>c.id===catId);
  currentVariant = variantId ? currentCat.variants.find(v=>v.id===variantId) : currentCat.variants[0];

  document.getElementById('home-view').style.display='none';
  document.getElementById('checklist-view').classList.add('show');
  window.scrollTo({top:0, behavior:'instant' in window ? 'instant':'auto'});

  renderVariantTabs();
  renderChecklist();
  searchInput.value='';
  searchResults.classList.remove('show');
}

function renderVariantTabs(){
  const wrap = document.getElementById('cl-variant-tabs');
  if(currentCat.variants.length<=1){ wrap.innerHTML=''; return; }
  wrap.innerHTML = currentCat.variants.map(v=>`
    <button class="${v.id===currentVariant.id?'active':''}" onclick="switchVariant('${v.id}')">${v.label}</button>
  `).join('');
}

function switchVariant(variantId){
  currentVariant = currentCat.variants.find(v=>v.id===variantId);
  renderVariantTabs();
  renderChecklist();
}

function renderChecklist(){
  document.getElementById('cl-eyebrow').textContent = currentCat.name;
  document.getElementById('cl-title').textContent = currentVariant.label;

  document.getElementById('cl-info-strip').innerHTML = `
    <div class="info-chip"><span class="eyebrow">Fee</span><strong>${currentVariant.fee}</strong></div>
    <div class="info-chip"><span class="eyebrow">Processing time</span><strong>${currentVariant.time}</strong></div>
    <div class="info-chip"><span class="eyebrow">Where</span><strong>${currentVariant.office}</strong></div>
  `;

  const list = document.getElementById('doc-list');
  list.innerHTML = currentVariant.items.map((item, i)=>{
    const key = `${currentCat.id}:${currentVariant.id}:${i}`;
    const checked = !!checkedState[key];
    return `
      <li class="doc-item ${checked?'done':''}" data-key="${key}">
        <button class="check-btn ${checked?'checked':''}" onclick="toggleItem('${key}')" aria-label="Mark collected">
          <svg class="stamp-mark" width="46" height="46" viewBox="0 0 46 46" fill="none">
            <circle cx="23" cy="23" r="19" stroke="#B4402A" stroke-width="2.4"/>
            <path d="M14 23l6 6 12-13" stroke="#B4402A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="doc-text">
          <span class="name">${item.name}</span>
          ${item.required ? '<span class="tag-required">Required</span>' : '<span class="tag-optional">If applicable</span>'}
          ${item.note ? `<div class="note">${item.note}</div>` : ''}
        </div>
      </li>
    `;
  }).join('');

  document.getElementById('cl-tips').innerHTML = currentVariant.tips.map(t=>`<li>${t}</li>`).join('');

  updateProgress();
}

function toggleItem(key){
  checkedState[key] = !checkedState[key];
  const li = document.querySelector(`.doc-item[data-key="${key}"]`);
  const btn = li.querySelector('.check-btn');
  li.classList.toggle('done', checkedState[key]);
  btn.classList.toggle('checked', checkedState[key]);
  updateProgress();
}

function updateProgress(){
  const total = currentVariant.items.length;
  const done = currentVariant.items.filter((_,i)=>checkedState[`${currentCat.id}:${currentVariant.id}:${i}`]).length;
  document.getElementById('progress-label').textContent = `${done} / ${total} collected`;
  document.getElementById('progress-fill').style.width = total? `${(done/total)*100}%` : '0%';
}

function resetChecklist(){
  currentVariant.items.forEach((_,i)=>{ delete checkedState[`${currentCat.id}:${currentVariant.id}:${i}`]; });
  renderChecklist();
}

function goHome(){
  document.getElementById('checklist-view').classList.remove('show');
  document.getElementById('home-view').style.display='block';
  window.scrollTo({top:0, behavior:'instant' in window ? 'instant':'auto'});
}

function scrollToId(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth', block:'start'});
}

/* =====================================================
   INIT
===================================================== */
renderCategoryGrid();
updateTotalCount();