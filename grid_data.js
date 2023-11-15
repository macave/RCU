const GRID_DATA = [
   {
      evtype: "DRREQ1",
      evdescriptor: "DR REQUESTING ATTENDANCE CODE 1",
      grid: "AP/PR1,NO,C:MC1,AP2",
      notification: "C"
   },
   {
      evtype: "DRREQ2",
      evdescriptor: "DR REQUESTING ATTENDANCE WITHIN 25 MIN",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "ERTDURESS",
      evdescriptor: "ERTCOMM UNIT ACTIVATED DURESS",
      grid: "AP/PR1,NO,D:MC1,NO (NOTE: MUST BE TWO UP CREW)",
      notification: "D"
   },
   {
      evtype: "IHTQAP1",
      evdescriptor: "IHT: QAP - URGENT PICKUP",
      grid: "AP/PR1,NO,C:MC1,AP2",
      notification: "C"
   },
   {
      evtype: "IHTQAP2",
      evdescriptor: "IHT: QAP",
      grid: "AP/PR2:NO BACKUP",
      notification: "NO"
   },
   {
      evtype: "SILENT1",
      evdescriptor: "CODE 1 POLICE REQ: CODE 2 FINAL 1KM",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "STANDBY2",
      evdescriptor: "STANDBY AT INCIDENT: POLICE/FIRE REQ",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "REF00",
      evdescriptor: "SUSPECTED CARDIAC ARREST-LIFE THREAT",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "REF01",
      evdescriptor: "AMBULANCE-CRITICAL",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "REF02",
      evdescriptor: "AMBULANCE-URGENT WITHIN 25 MINS",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "REF03",
      evdescriptor: "NO CONSENT-NOT URGENT/NO ASP 1-HOUR",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "REF05",
      evdescriptor: "REQUIRES FIELD ASSESS",
      grid: "ARU2,NO:AP/PR2,NO",
      notification: "NO"
   },
   {
      evtype: "111",
      evdescriptor: "AFPR  ACC-AIR AIRCRAFT ACCIDENT",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "123",
      evdescriptor: "AFPR  ACC-RAI RAIL ACCIDENT - TRAPPED",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "131",
      evdescriptor: "AP      ACC-ROA CYCLIST ACCIDENT",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "132",
      evdescriptor: "AP      ACC-ROA PEDESTRIAN ACCIDENT",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "133",
      evdescriptor: "AFP     ACC-ROA ROAD ACCIDENT - HAZMAT - AMBULANCE REQUIRED",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "138",
      evdescriptor: "AFPR  ACC-ROA ROAD ACCIDENT - TRAPPED",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "145",
      evdescriptor: "AP    ACC-WAT IMMERSION DROWNING",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "314",
      evdescriptor: "AP    CRI-PER GUNSHOT OR STABBING",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "315",
      evdescriptor: "AP    CRI-PER ASSAULT - AMB - SERIOUS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "316",
      evdescriptor: "AP    CRI-PER ASSAULT - AMBULANCE REQUIRED",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "410",
      evdescriptor: "AP    DIS BRAWL - AMBULANCE REQUIRED",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "562",
      evdescriptor: "AFP   EME-LOC LOCK IN - VEHICLE",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "594",
      evdescriptor: "AP     EME-THR PSYCHIATRIC PATIENT",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "1A2",
      evdescriptor: "A       ABDOMINAL PAIN: NON-TRAUMATIC TESTICLE OR GROIN PAIN (MALE)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "1C1",
      evdescriptor: "A       ABDOMINAL PAIN: SUSPECTED AORTIC ANEURYSM > 50",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "1C2",
      evdescriptor: "A       ABDOMINAL PAIN: DIAGNOSED AORTIC ANEURYSM",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "1C4",
      evdescriptor: "A       ABDOMINAL PAIN: FEMALES WITH FAINTING OR NEAR FAINTING",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "1D2",
      evdescriptor: "A       ABDOMINAL PAIN: ASHEN OR GREY COLOUR REPORTED",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "2B1I",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: UNKNOWN/OTHER CODES NOT APPLICABLE (INJECTION)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "2C0",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: CONDITION WORSENING",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "2C1",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: DIFF BREATHING OR SWALLOWING",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "2C2",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: HX OF SEVERE ALLERGIC REACTION",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "2D1",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: NOT ALERT",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "2D2",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: DIFF SPEAKING B/W BREATHS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "2D4",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: SNAKEBITE",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "2D5",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: FUNNEL-WEB SPIDER BITE",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "2E1",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: INEFFECTIVE BREATHING",
      grid: "MC*/PR*1,AP/PR1,D:AP1,MC*/PR*1",
      notification: "D"
   },
   {
      evtype: "3A1",
      evdescriptor: "A       ANIMAL BITES/ATTACKS: NOT DANGEROUS BODY AREA WITH DEFORMITY",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "3B2",
      evdescriptor: "AP      ANIMAL BITES/ATTACKS: SERIOUS HAEMORRHAGE",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "3D1",
      evdescriptor: "AFPEMR  ANIMAL BITES/ATTACKS: ARREST",
      grid: "MC*/PR*1,AP/PR1,D:AP1,MC*/PR*1",
      notification: "D"
   },
   {
      evtype: "3D2",
      evdescriptor: "AP      ANIMAL BITES/ATTACKS: UNCONSCIOUS",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "3D3",
      evdescriptor: "AP      ANIMAL BITES/ATTACKS: NOT ALERT",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "4A1A",
      evdescriptor: "AP      ASSAULT/SEXUAL ASSAULT/STUN GUN: NOT DANG BODY AREA W DEFORM (ASSAULT)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "4B2A",
      evdescriptor: "AP      ASSAULT/SEXUAL ASSAULT/STUN GUN: SERIOUS HAEMORRHAGE (ASSAULT)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "4D1",
      evdescriptor: "AP      ASSAULT/SEXUAL ASSAULT/STUN GUN: ARREST",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "4D2A",
      evdescriptor: "AP      ASSAULT/SEXUAL ASSAULT/STUN GUN: UNCONSCIOUS (ASSAULT)",
      grid: "AP1,MC/PR2:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "4D3A",
      evdescriptor: "AP      ASSAULT/SEXUAL ASSAULT/STUN GUN: NOT ALERT (ASSAULT)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "5C1",
      evdescriptor: "A       BACK PAIN: SUSPECTED AORTIC ANEURYSM (TEARING/RIPPING PAIN) > 50",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "5C2",
      evdescriptor: "A       BACK PAIN: DIAGNOSED AORTIC ANEURYSM",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "6C1A",
      evdescriptor: "A       BREATHING PROBLEMS: ABNORMAL BREATHING (ASTHMA)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "6D2",
      evdescriptor: "A       BREATHING PROBLEMS: DIFF SPEAKING B/W BREATHS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "6D3",
      evdescriptor: "A       BREATHING PROBLEMS: CHANGING COLOUR",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "6E1",
      evdescriptor: "A       BREATHING PROBLEMS: INEFFECTIVE BREATHING",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "6E1A",
      evdescriptor: "A       BREATHING PROBLEMS: INEFFECTIVE BREATHING (ASTHMA)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "7A1",
      evdescriptor: "A       BURNS/EXPLOSION: SMALL <18% BODY AREA",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "7B2",
      evdescriptor: "AFP     BURNS/EXPLOSION: UNKNOWN/OTHER CODES NOT APPLICABLE",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "7C2",
      evdescriptor: "AP      BURNS/EXPLOSION: DIFFICULTY BREATHING",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "7C4",
      evdescriptor: "AP      BURNS/EXPLOSION: SIGNIFICANT FACIAL BURNS",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "7D2",
      evdescriptor: "AP      BURNS/EXPLOSION: ARREST",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "7D3",
      evdescriptor: "AP      BURNS/EXPLOSION: UNCONSCIOUS",
      grid: "AP1,MC/PR2,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "7D4",
      evdescriptor: "AP      BURNS/EXPLOSION: NOT ALERT",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "7D5",
      evdescriptor: "AP      BURNS/EXPLOSION: DIFFICULTY SPEAKING B/N BREATHS",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "7E1",
      evdescriptor: "AFP     BURNS/EXPLOSION: PERSON ON FIRE",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "8D1U",
      evdescriptor: "AFP     CO/INHALATION/HAZMAT: ARREST (UNKNOWN)",
      grid: "MC*/PR*1,AP/PR1,D:AP1,MC*/PR*1",
      notification: "D"
   },
   {
      evtype: "8D2",
      evdescriptor: "AFP     CO/INHALATION/HAZMAT: UNCONSCIOUS",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "8D2T",
      evdescriptor: "AFP     CO/INHALATION/HAZMAT: UNCONSCIOUS (SUICIDE ATTEMPT OTHER)",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "8D4",
      evdescriptor: "AFP     CO/INHALATION/HAZMAT: DIFF SPEAKING B/N BREATHS",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "8D5",
      evdescriptor: "AFP     CO/INHALATION/HAZMAT: MULTIPLE VICTIMS",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "8D6",
      evdescriptor: "AFP     CO/INHALATION/HAZMAT: UNK/OTH CODES NOT APPLICABLE",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "9B1A",
      evdescriptor: "AP      CARDIAC OR RESP ARREST/DEATH: OBV DEATH UNQUES",
      grid: "AP/PR2,C:ARU2,AP/PR2",
      notification: "C"
   },
   {
      evtype: "9D1",
      evdescriptor: "AFEMR   CARDIAC OR RESP ARREST/DEATH: INEFFECTIVE BREATHING",
      grid: "MC*/PR*1,AP/PR1,G:AP1,MC*/PR*1",
      notification: "G"
   },
   {
      evtype: "9E1",
      evdescriptor: "AFEMR   CARDIAC OR RESP ARREST/DEATH: NOT BREATHING AT ALL",
      grid: "MC*/PR*1,AP/PR1,G:AP1,MC*/PR*1",
      notification: "G"
   },
   {
      evtype: "9E3",
      evdescriptor: "AFPEMR  CARDIAC OR RESP ARREST/DEATH: HANGING",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "10C1",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: ABNORMAL BREATHING",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "10C3",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: BREATHING NORMALLY � 35",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "10D1",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: NOT ALERT",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "10D2",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: DIFFICULTY SPEAKING BETWEEN BREATHS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "10D3",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: CHANGING COLOUR",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "10D4",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: CLAMMY OR COLD SWEATS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "10D5",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: HEART ATTACK OR ANGINA HISTORY",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "11D1F",
      evdescriptor: "A       CHOKING: ABNORMAL BREATHING (PARTIAL OBSTRUCTION) (FOOD)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "11D2F",
      evdescriptor: "A       CHOKING: NOT ALERT (FOOD)",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "11E1",
      evdescriptor: "A       CHOKING: COMPLETE OBSTRUCTION/NOT BREATHING/INEFFECTIVE BREATHING",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "12D2",
      evdescriptor: "A       CONVULSIONS/FITTING: CONTINUOUS OR MULTIPLE FITTING",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "12D4",
      evdescriptor: "A       CONVULSIONS/FITTING: EFFECTIVE BREATH NOT VERIFIED � 35",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "13C1",
      evdescriptor: "A       DIABETIC PROBLEMS: NOT ALERT",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "13D1",
      evdescriptor: "A       DIABETIC PROBLEMS: UNCONSCIOUS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "14B3",
      evdescriptor: "AP      DROWNING/DIVING: UNKNOWN/OTHER CODES NOT APPLICABLE",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "14C1",
      evdescriptor: "AP      DROWNING/DIVING:  ALERT WITH ABNORMAL BREATHING",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "14D1",
      evdescriptor: "AP      DROWNING/DIVING: UNCONSCIOUS",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "14D4",
      evdescriptor: "AP      DROWNING/DIVING: JUST RESUSCITATED AND/OR DEFIBRILLATED",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "14D5",
      evdescriptor: "AP      DROWNING/DIVING: NOT ALERT",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "14D6",
      evdescriptor: "AP      DROWNING/DIVING: SUSPECTED NECK INJURY",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "14E1",
      evdescriptor: "AFPEMR  DROWNING/DIVING: ARREST (OUT OF WATER)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "14E2",
      evdescriptor: "AFPEMR  DROWNING/DIVING: UNDERWATER (NON-SPECIALISED RESCUE)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "15D1E",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: MULTIPLE VICTIMS (ELECTROCUTION)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D2E",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: UNCONSCIOUS (ELECTROCUTION)",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D2L",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: UNCONSCIOUS (LIGHTNING)",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D7E",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: NOT ALERT (ELECTROCUTION)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D7L",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: NOT ALERT (LIGHTNING)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D8E",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: ABNORMAL BREATHING (ELECTROCUTION)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D8L",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: ABNORMAL BREATHING (LIGHTNING)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D9E",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: UNK/OTH CODES NOT APPLICABLE (ELECTROCUTION)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D9L",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: UNK/OTH CODES NOT APPLICABLE (LIGHTNING)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15E1E",
      evdescriptor: "AFPEMR  ELECTROCUTION/LIGHTNING: NOT BREATH/INEFFECTIVE BREATH (ELECTROCUTION)",
      grid: "MC*/PR*1,AP/PR1,D:AP1,MC*/PR*1",
      notification: "D"
   },
   {
      evtype: "16B1",
      evdescriptor: "A       EYE PROBLEMS/INJURIES: SEVERE EYE INJURY",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "17A1",
      evdescriptor: "A       FALLS: NOT DANGEROUS BODY AREA WITH DEFORMITY",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "17B1",
      evdescriptor: "AP      FALLS: POSSIBLY DANGEROUS BODY AREA",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "17B2",
      evdescriptor: "AP      FALLS: SERIOUS HAEMORRHAGE",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "17B3P",
      evdescriptor: "A       FALLS: FALL DOWN STAIRS (PUBLIC PLACE)",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "17D1",
      evdescriptor: "AP      FALLS: EXTREME FALL (> 10M/30FT)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "17D2",
      evdescriptor: "AFPEMR  FALLS: ARREST",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "17D3",
      evdescriptor: "A       FALLS: UNCONSCIOUS",
      grid: "AP1,MC/PR2:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "17D4P",
      evdescriptor: "A       FALLS: NOT ALERT (PUBLIC PLACE)",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "17D6",
      evdescriptor: "AP      FALLS: LONG FALL",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "18C1L",
      evdescriptor: "A       HEADACHE: NOT ALERT (<12 HRS SINCE SYMPTOMS STARTED)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "18C2L",
      evdescriptor: "A       HEADACHE: ABNORMAL BREATHING (<12 HRS SINCE SYMPTOMS STARTED)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "18C3L",
      evdescriptor: "A       HEADACHE: SPEECH PROBLEMS (<12 HRS SINCE SYMPTOMS STARTED)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "19C1",
      evdescriptor: "A       HEART PROBLEMS/A.I.C.D: FIRING OF A.I.C.D.",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "19C2",
      evdescriptor: "A       HEART PROBLEMS/A.I.C.D: ABNORMAL BREATHING",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "19C3",
      evdescriptor: "A       HEART PROBLEMS/A.I.C.D: CHEST PAIN/DISCOMFORT � 35 (NPS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "19D1",
      evdescriptor: "A       HEART PROBLEMS/A.I.C.D: NOT ALERT",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "19D2",
      evdescriptor: "A       HEART PROBLEMS/A.I.C.D: DIFFICULTY SPEAKING BETWEEN BREATHS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "20D1C",
      evdescriptor: "AP      HEAT/COLD EXPOSURE: NOT ALERT (COLD EXPOSURE)",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "20D1H",
      evdescriptor: "A       HEAT/COLD EXPOSURE: NOT ALERT (HEAT EXPOSURE)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "21B2T",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: SERIOUS HAEMORRHAGE (TRAUMA)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "21B3M",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: BLEEDING DISORDER (MEDICAL)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "21B4M",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: BLOOD THINNERS (MEDICAL)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "21D1",
      evdescriptor: "AFPEMR  HAEMORRHAGE/LACERATIONS: ARREST",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "21D2T",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: UNCONSCIOUS (TRAUMA)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "21D5M",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: ABNORMAL BREATHING (MEDICAL)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "21D5T",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: ABNORMAL BREATHING (TRAUMA)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "22D1",
      evdescriptor: "AFPR    INACCESSIBLE INCIDENT/ENTRAPMENT: MECHANICAL/MACHINERY",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "22D2",
      evdescriptor: "AFPR    INACCESSIBLE INCIDENT/ENTRAPMENT: TRENCH COLLAPSE",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "22D3",
      evdescriptor: "AFPRS   INACCESSIBLE INCIDENT/ENTRAPMENT: STRUCTURE COLLAPSE",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "22D4",
      evdescriptor: "AFPR    INACCESSIBLE INCIDENT/ENTRAPMENT: CONFINED SPACE",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "23C1",
      evdescriptor: "A       OVERDOSE/POISONING: NOT ALERT",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "23C2",
      evdescriptor: "A       OVERDOSE/POISONING: ABNORMAL BREATHING",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "23C5",
      evdescriptor: "A       OVERDOSE/POISONING: NARCOTICS/DERIVATIVES",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "23C6",
      evdescriptor: "A       OVERDOSE/POISONING: ACID OR ALKALI ",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "23D1",
      evdescriptor: "A       OVERDOSE/POISONING: ARREST",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "23D2",
      evdescriptor: "A       OVERDOSE/POISONING: UNCONSCIOUS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "23E1A",
      evdescriptor: "A       OVERDOSE/POISONING: NARCOTIC/OPIOID ARREST (ACCIDENTAL)",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "24B2",
      evdescriptor: "A       PREGNANCY: UNKNOWN/OTHER CODES NOT APPLICABLE",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "24C2",
      evdescriptor: "A       PREGNANCY: 1ST TRIMESTER SERIOUS HAEMORRHAGE",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "24C4",
      evdescriptor: "A       PREGNANCY: BABY BORN (NO COMPLICATIONS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "24D1",
      evdescriptor: "A       PREGNANCY: BREECH OR CORD",
      grid: "AP/PR1,NO,C:MC1,AP2",
      notification: "C"
   },
   {
      evtype: "24D2",
      evdescriptor: "A       PREGNANCY: HEAD VISIBLE/OUT",
      grid: "AP/PR1,NO,C:MC1,AP2",
      notification: "C"
   },
   {
      evtype: "24D5",
      evdescriptor: "A       PREGNANCY: HIGH RISK COMPLICATIONS",
      grid: "AP/PR1,NO,C:MC1,AP2",
      notification: "C"
   },
   {
      evtype: "25D1",
      evdescriptor: "AP      PSYCH/ABNORMAL BEHAVIOUR: ARREST",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "25D2",
      evdescriptor: "AP      PSYCH/ABNORMAL BEHAVIOUR: UNCONSCIOUS",
      grid: "AP1,MC/PR2:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "25D4",
      evdescriptor: "AP      PSYCH/ABNORMAL BEHAVIOUR: DANGEROUS HAEMORRHAGE",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "25D4V",
      evdescriptor: "AP      PSYCH/ABNORMAL BEHAVIOUR: DANGEROUS HAEMORRHAGE (VIOLENT)",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "25D5",
      evdescriptor: "AP      PSYCH/ABNORMAL BEHAVIOUR: NEAR HANG/STRANGU/SUFF (DIFF BREATH)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "27B3G",
      evdescriptor: "AP      STAB/GUNSHOT: SERIOUS HAEMORRHAGE (GSW)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27B3I",
      evdescriptor: "AFPR    STAB/GUNSHOT: SERIOUS HAEMORRHAGE (IMPALED CURRENTLY)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27B3S",
      evdescriptor: "AP      STAB/GUNSHOT: SERIOUS HAEMORRHAGE (STAB)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "27B4G",
      evdescriptor: "AP      STAB/GUNSHOT: UNK/OTH CODES NOT APPLICABLE (GSW)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "27D1",
      evdescriptor: "AP      STAB/GUNSHOT: ARREST ",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "27D1G",
      evdescriptor: "AFPEMR  STAB/GUNSHOT: ARREST (GSW)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "27D2G",
      evdescriptor: "AP      STAB/GUNSHOT: UNCONSCIOUS (GSW)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "27D2P",
      evdescriptor: "AP      STAB/GUNSHOT: UNCONSCIOUS (PENETRATING/NOT IMPALED)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "27D2S",
      evdescriptor: "AP      STAB/GUNSHOT: UNCONSCIOUS (STAB)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "27D4G",
      evdescriptor: "AP      STAB/GUNSHOT: CENTRAL WOUNDS (GSW)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27D4I",
      evdescriptor: "AFPR    STAB/GUNSHOT: CENTRAL WOUNDS (IMPALED CURRENTLY)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27D4P",
      evdescriptor: "AP      STAB/GUNSHOT: CENTRAL WOUNDS (PENETRATING/NOT IMPALED)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27D4S",
      evdescriptor: "AP      STAB/GUNSHOT: CENTRAL WOUNDS (STAB)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27D4X",
      evdescriptor: "AP      STAB/GUNSHOT: CENTRAL WOUNDS (SELF INFLICTED GSW)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27D4Y",
      evdescriptor: "AP      STAB/GUNSHOT: CENTRAL WOUNDS (SELF INFLICTED STAB)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "28A1L",
      evdescriptor: "A       STROKE: BREATHING NORMALLY < 35 (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C1L",
      evdescriptor: "A       STROKE: NOT ALERT (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C2L",
      evdescriptor: "A       STROKE: ABNORMAL BREATHING (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C3L",
      evdescriptor: "A       STROKE: SUDDEN SPEECH PROBLEMS (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C4L",
      evdescriptor: "A       STROKE: SUDDEN WEAKNESS/NUMBNESS (ONE SIDE) (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C5L",
      evdescriptor: "A       STROKE: SUDDEN PARALYSIS/FACIAL DROOP (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C6L",
      evdescriptor: "A       STROKE: SUDDEN LOSS OF BALANCE/COORDINATION (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C7L",
      evdescriptor: "A       STROKE: SUDDEN VISION PROBLEMS (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "29A1",
      evdescriptor: "AP      TRAFFIC/TRANSPORT INCIDENT: 1ST PARTY CALLER NOT DANGEROUS INJURY",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "29B1",
      evdescriptor: "AP      TRAFFIC/TRANSPORT INCIDENT: INJURIES",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "29B2",
      evdescriptor: "AP      TRAFFIC/TRANSPORT INCIDENT: SERIOUS HAEMORRHAGE",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "29B3",
      evdescriptor: "AFP     TRAFFIC/TRANSPORT INCIDENT: OTHER HAZARDS",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "29D1H",
      evdescriptor: "AFPR    TRAFFIC/TRANSPORT INCIDENT: MAJOR INCIDENT- VEHICLE VS BUILDING",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "29D2P",
      evdescriptor: "AFPR    TRAFFIC/TRANSPORT INCIDENT: HIGH MECHANISM- ROLLOVERS",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "29D3",
      evdescriptor: "AFPR    TRAFFIC/TRANSPORT INCIDENT: HIGH VELOCITY IMPACT",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "29D5",
      evdescriptor: "AFPR    TRAFFIC/TRANSPORT INCIDENT: TRAPPED VICTIM",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "29D6",
      evdescriptor: "AFPEMR  TRAFFIC/TRANSPORT INCIDENT: ARREST",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "29D7",
      evdescriptor: "AP      TRAFFIC/TRANSPORT INCIDENT: UNCONSCIOUS",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "30A1",
      evdescriptor: "A       TRAUMATIC INJURIES: NOT DANGEROUS BODY AREA WITH DEFORMITY",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "30B2",
      evdescriptor: "AP      TRAUMATIC INJURIES: SERIOUS HAEMORRHAGE",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "30D1",
      evdescriptor: "AFPEMR  TRAUMATIC INJURIES: ARREST",
      grid: "MC*/PR*1,AP/PR1,D:AP1,MC*/PR*1",
      notification: "D"
   },
   {
      evtype: "30D2",
      evdescriptor: "AP      TRAUMATIC INJURIES: UNCONSCIOUS",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "30D5",
      evdescriptor: "AP      TRAUMATIC INJURIES: HIGH VELOCITY IMPACT/MASS INJURY",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "31C3",
      evdescriptor: "A       UNCONSCIOUS/FAINTING: FEMALES WITH ABDOMINAL PAIN",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "31D4",
      evdescriptor: "A       UNCONSCIOUS/FAINTING: NOT ALERT",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "31D5",
      evdescriptor: "A       UNCONSCIOUS/FAINTING: CHANGING COLOUR",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "31E1",
      evdescriptor: "A       UNCONSCIOUS/FAINTING: INEFFECTIVE BREATHING",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "32B3",
      evdescriptor: "A       UNKNOWN PROBLEM: UNKNOWN/OTHER CODES NOT APPLICABLE",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "32D1",
      evdescriptor: "A       UNKNOWN PROBLEM: LIFE STATUS QUESTIONABLE",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },

   {
      evtype: "17A2A",
      evdescriptor: "AP      FALLS: NOT DANGEROUS BODY AREA (ACCESS DIFFICULTY)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "17A2P",
      evdescriptor: "A       FALLS: NOT DANGEROUS BODY AREA (PUBLIC PLACE)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "17A3A",
      evdescriptor: "AP      FALLS: NON-RECENT INJURIES (≥ 6HRS) (ACCESS DIFFICULTY)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "17A3E",
      evdescriptor: "A       FALLS: NON-RECENT INJURIES (≥ 6HRS) (ENVIRONMENTAL PROBS)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "17A3P",
      evdescriptor: "A       FALLS: NON-RECENT INJURIES (≥ 6HRS) (PUBLIC PLACE)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "17A4A",
      evdescriptor: "AP      FALLS: PUBLIC ASSIST NO INJURIES (ACCESS DIFFICULTY)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "17A4E",
      evdescriptor: "A       FALLS: PUBLIC ASSIST NO INJURIES (ENVIRONMENTAL PROBS)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "17A4P",
      evdescriptor: "A       FALLS: PUBLIC ASSIST NO INJURIES (PUBLIC PLACE)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "17B2P",
      evdescriptor: "A       FALLS: SERIOUS HAEMORRHAGE (PUBLIC PLACE)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "18C1D",
      evdescriptor: "A       HEADACHE: NOT ALERT (PARTIAL EVIDENCE) (>12 HRS)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "18C1K",
      evdescriptor: "A       HEADACHE: NOT ALERT (CLEAR EVIDENCE) (>12 HRS)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "18C1Z",
      evdescriptor: "A       HEADACHE: NOT ALERT (NO TEST EVIDENCE) (UNK)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "18C2H",
      evdescriptor: "A       HEADACHE: ABNORMAL BREATHING (STRONG EVIDENCE) (>12 HRS)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "21A2M",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: MINOR HAEMORRHAGE (MEDICAL)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "21C1T",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: HAEMORRHAGE THROUGH TUBES (TRAUMA)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "23B1Q",
      evdescriptor: "AP      OVERDOSE/POISONING: OVERDOSE (VIOLENT/COMBATIVE/FENTANYL)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "23B1S",
      evdescriptor: "AP      OVERDOSE/POISONING: OVERDOSE (WEAPONS/FENTANYL)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "23C7D",
      evdescriptor: "A       OVERDOSE/POISONING: UNK/OTH CODES N/A (ACCIDENTAL AND FENTANYL)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "23C7G",
      evdescriptor: "A       OVERDOSE/POISONING: UNK/OTH CODES N/A (INTENTIONAL AND FENTANYL)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "23C7S",
      evdescriptor: "AP      OVERDOSE/POISONING: UNK/OTH CODES N/A (WEAPONS/FENTANYL)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "24A1M",
      evdescriptor: "A       PREGNANCY: 1ST TRIMESTER HAEM/MISCARRIAGE/THREATENED (MULTIPLE BIRTH)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "24B1M",
      evdescriptor: "A       PREGNANCY: LABOUR (DELIVERY NOT IMMINENT, ≥ 24 WEEKS) (MULTIPLE BIRTH)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "24C3",
      evdescriptor: "A       PREGNANCY: ABDOMINAL PAIN (< 24 WEEKS/NO FOETUS/TISSUE/BLOOD)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "24C3M",
      evdescriptor: "A       PREGNANCY: ABDOMINAL PAIN (<24 WEEKS/NO FOETUS/TISS/BLOOD) (MULTI BIRTH)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "24O1M",
      evdescriptor: "A       PREGNANCY: WATERS BROKEN (NO CONTRACT OR PRESENTING PARTS) (MULTI BIRTH)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "1A1",
      evdescriptor: "A       ABDOMINAL PAIN",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "1C3",
      evdescriptor: "A       ABDOMINAL PAIN: FAINTING OR NEAR FAINTING ≥ 50",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "1C5",
      evdescriptor: "A       ABDOMINAL PAIN: MALES WITH PAIN ABOVE NAVEL ≥ 35",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "1C6",
      evdescriptor: "A       ABDOMINAL PAIN: FEMALES WITH PAIN ABOVE NAVEL ≥ 45",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "2A1",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: NO DIFF BREATHING/SWALLOWING (RASH/HIVES/ITCH)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "2A2",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: SPIDER BITE",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "2A3",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: NON-TROPICAL JELLYFISH STING",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "3A2",
      evdescriptor: "A       ANIMAL BITES/ATTACKS: NOT DANGEROUS BODY AREA",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "3A3",
      evdescriptor: "A       ANIMAL BITES/ATTACKS: NON-RECENT INJURIES (≥ 6HRS)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "3A4",
      evdescriptor: "A       ANIMAL BITES/ATTACKS: SUPERFICIAL INJURIES",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "5C3",
      evdescriptor: "A       BACK PAIN:FAINTING OR NEAR FAINTING ≥ 50",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "5C4",
      evdescriptor: "A       BACK PAIN: DIFFICULTY BREATHING",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "5D1",
      evdescriptor: "A       BACK PAIN: NOT ALERT",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "7A3",
      evdescriptor: "A       BURNS/EXPLOSION: MINOR BURNS",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "16A1",
      evdescriptor: "A       EYE PROBLEMS/INJURIES: MODERATE EYE INJURY",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "20A1C",
      evdescriptor: "AP      HEAT/COLD EXPOSURE: ALERT (COLD EXPOSURE)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "20A1H",
      evdescriptor: "A       HEAT/COLD EXPOSURE: ALERT (HEAT EXPOSURE)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "25B3",
      evdescriptor: "AP      PSYCH/ABNORMAL BEHAVIOUR: THREATENING SUICIDE",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "28C9G",
      evdescriptor: "A       STROKE: STROKE HISTORY (>12 HRS)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "32B2",
      evdescriptor: "A       UNKNOWN PROBLEM: COMMUNITY ALARM NOTIFICATIONS (NO PATIENT INFORMATION)",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "DRREQ1",
      evdescriptor: "DR REQUESTING ATTENDANCE CODE 1",
      grid: "AP/PR1,NO,C:MC1,AP2",
      notification: "C"
   },
   {
      evtype: "DRREQ2",
      evdescriptor: "DR REQUESTING ATTENDANCE WITHIN 25 MIN",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "ERTDURESS",
      evdescriptor: "ERTCOMM UNIT ACTIVATED DURESS",
      grid: "AP/PR1,NO,D:MC1,NO (NOTE: MUST BE TWO UP CREW)",
      notification: "D"
   },
   {
      evtype: "IHTQAP1",
      evdescriptor: "IHT: QAP - URGENT PICKUP",
      grid: "AP/PR1,NO,C:MC1,AP2",
      notification: "C"
   },
   {
      evtype: "IHTQAP2",
      evdescriptor: "IHT: QAP",
      grid: "AP/PR2:NO BACKUP",
      notification: "NO"
   },
   {
      evtype: "SILENT1",
      evdescriptor: "CODE 1 POLICE REQ: CODE 2 FINAL 1KM",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "STANDBY2",
      evdescriptor: "STANDBY AT INCIDENT: POLICE/FIRE REQ",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "REF00",
      evdescriptor: "SUSPECTED CARDIAC ARREST-LIFE THREAT",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "REF01",
      evdescriptor: "AMBULANCE-CRITICAL",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "REF02",
      evdescriptor: "AMBULANCE-URGENT WITHIN 25 MINS",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "REF03",
      evdescriptor: "NO CONSENT-NOT URGENT/NO ASP 1-HOUR",
      grid: "AP/PR3,NO:ARU3,AP/PR3",
      notification: "NO"
   },
   {
      evtype: "REF05",
      evdescriptor: "REQUIRES FIELD ASSESS",
      grid: "ARU2,NO:AP/PR2,NO",
      notification: "NO"
   },
   {
      evtype: "111",
      evdescriptor: "AFPR  ACC-AIR AIRCRAFT ACCIDENT",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "123",
      evdescriptor: "AFPR  ACC-RAI RAIL ACCIDENT - TRAPPED",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "131",
      evdescriptor: "AP      ACC-ROA CYCLIST ACCIDENT",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "132",
      evdescriptor: "AP      ACC-ROA PEDESTRIAN ACCIDENT",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "133",
      evdescriptor: "AFP     ACC-ROA ROAD ACCIDENT - HAZMAT - AMBULANCE REQUIRED",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "138",
      evdescriptor: "AFPR  ACC-ROA ROAD ACCIDENT - TRAPPED",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "145",
      evdescriptor: "AP    ACC-WAT IMMERSION DROWNING",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "314",
      evdescriptor: "AP    CRI-PER GUNSHOT OR STABBING",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "315",
      evdescriptor: "AP    CRI-PER ASSAULT - AMB - SERIOUS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "316",
      evdescriptor: "AP    CRI-PER ASSAULT - AMBULANCE REQUIRED",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "410",
      evdescriptor: "AP    DIS BRAWL - AMBULANCE REQUIRED",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "562",
      evdescriptor: "AFP   EME-LOC LOCK IN - VEHICLE",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "594",
      evdescriptor: "AP     EME-THR PSYCHIATRIC PATIENT",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "1A2",
      evdescriptor: "A       ABDOMINAL PAIN: NON-TRAUMATIC TESTICLE OR GROIN PAIN (MALE)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "1C1",
      evdescriptor: "A       ABDOMINAL PAIN: SUSPECTED AORTIC ANEURYSM > 50",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "1C2",
      evdescriptor: "A       ABDOMINAL PAIN: DIAGNOSED AORTIC ANEURYSM",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "1C4",
      evdescriptor: "A       ABDOMINAL PAIN: FEMALES WITH FAINTING OR NEAR FAINTING",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "1D2",
      evdescriptor: "A       ABDOMINAL PAIN: ASHEN OR GREY COLOUR REPORTED",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "2B1I",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: UNKNOWN/OTHER CODES NOT APPLICABLE (INJECTION)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "2C0",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: CONDITION WORSENING",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "2C1",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: DIFF BREATHING OR SWALLOWING",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "2C2",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: HX OF SEVERE ALLERGIC REACTION",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "2D1",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: NOT ALERT",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "2D2",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: DIFF SPEAKING B/W BREATHS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "2D4",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: SNAKEBITE",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "2D5",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: FUNNEL-WEB SPIDER BITE",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "2E1",
      evdescriptor: "A       ALLERGIES/ENVENOMATIONS: INEFFECTIVE BREATHING",
      grid: "MC*/PR*1,AP/PR1,D:AP1,MC*/PR*1",
      notification: "D"
   },
   {
      evtype: "3A1",
      evdescriptor: "A       ANIMAL BITES/ATTACKS: NOT DANGEROUS BODY AREA WITH DEFORMITY",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "3B2",
      evdescriptor: "AP      ANIMAL BITES/ATTACKS: SERIOUS HAEMORRHAGE",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "3D1",
      evdescriptor: "AFPEMR  ANIMAL BITES/ATTACKS: ARREST",
      grid: "MC*/PR*1,AP/PR1,D:AP1,MC*/PR*1",
      notification: "D"
   },
   {
      evtype: "3D2",
      evdescriptor: "AP      ANIMAL BITES/ATTACKS: UNCONSCIOUS",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "3D3",
      evdescriptor: "AP      ANIMAL BITES/ATTACKS: NOT ALERT",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "4A1A",
      evdescriptor: "AP      ASSAULT/SEXUAL ASSAULT/STUN GUN: NOT DANG BODY AREA W DEFORM (ASSAULT)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "4B2A",
      evdescriptor: "AP      ASSAULT/SEXUAL ASSAULT/STUN GUN: SERIOUS HAEMORRHAGE (ASSAULT)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "4D1",
      evdescriptor: "AP      ASSAULT/SEXUAL ASSAULT/STUN GUN: ARREST",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "4D2A",
      evdescriptor: "AP      ASSAULT/SEXUAL ASSAULT/STUN GUN: UNCONSCIOUS (ASSAULT)",
      grid: "AP1,MC/PR2:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "4D3A",
      evdescriptor: "AP      ASSAULT/SEXUAL ASSAULT/STUN GUN: NOT ALERT (ASSAULT)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "5C1",
      evdescriptor: "A       BACK PAIN: SUSPECTED AORTIC ANEURYSM (TEARING/RIPPING PAIN) > 50",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "5C2",
      evdescriptor: "A       BACK PAIN: DIAGNOSED AORTIC ANEURYSM",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "6C1A",
      evdescriptor: "A       BREATHING PROBLEMS: ABNORMAL BREATHING (ASTHMA)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "6D2",
      evdescriptor: "A       BREATHING PROBLEMS: DIFF SPEAKING B/W BREATHS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "6D3",
      evdescriptor: "A       BREATHING PROBLEMS: CHANGING COLOUR",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "6E1",
      evdescriptor: "A       BREATHING PROBLEMS: INEFFECTIVE BREATHING",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "6E1A",
      evdescriptor: "A       BREATHING PROBLEMS: INEFFECTIVE BREATHING (ASTHMA)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "7A1",
      evdescriptor: "A       BURNS/EXPLOSION: SMALL <18% BODY AREA",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "7B2",
      evdescriptor: "AFP     BURNS/EXPLOSION: UNKNOWN/OTHER CODES NOT APPLICABLE",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "7C2",
      evdescriptor: "AP      BURNS/EXPLOSION: DIFFICULTY BREATHING",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "7C4",
      evdescriptor: "AP      BURNS/EXPLOSION: SIGNIFICANT FACIAL BURNS",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "7D2",
      evdescriptor: "AP      BURNS/EXPLOSION: ARREST",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "7D3",
      evdescriptor: "AP      BURNS/EXPLOSION: UNCONSCIOUS",
      grid: "AP1,MC/PR2,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "7D4",
      evdescriptor: "AP      BURNS/EXPLOSION: NOT ALERT",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "7D5",
      evdescriptor: "AP      BURNS/EXPLOSION: DIFFICULTY SPEAKING B/N BREATHS",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "7E1",
      evdescriptor: "AFP     BURNS/EXPLOSION: PERSON ON FIRE",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "8D1U",
      evdescriptor: "AFP     CO/INHALATION/HAZMAT: ARREST (UNKNOWN)",
      grid: "MC*/PR*1,AP/PR1,D:AP1,MC*/PR*1",
      notification: "D"
   },
   {
      evtype: "8D2",
      evdescriptor: "AFP     CO/INHALATION/HAZMAT: UNCONSCIOUS",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "8D2T",
      evdescriptor: "AFP     CO/INHALATION/HAZMAT: UNCONSCIOUS (SUICIDE ATTEMPT OTHER)",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "8D4",
      evdescriptor: "AFP     CO/INHALATION/HAZMAT: DIFF SPEAKING B/N BREATHS",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "8D5",
      evdescriptor: "AFP     CO/INHALATION/HAZMAT: MULTIPLE VICTIMS",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "8D6",
      evdescriptor: "AFP     CO/INHALATION/HAZMAT: UNK/OTH CODES NOT APPLICABLE",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "9B1A",
      evdescriptor: "AP      CARDIAC OR RESP ARREST/DEATH: OBV DEATH UNQUES",
      grid: "AP/PR2,C:ARU2,AP/PR2",
      notification: "C"
   },
   {
      evtype: "9D1",
      evdescriptor: "AFEMR   CARDIAC OR RESP ARREST/DEATH: INEFFECTIVE BREATHING",
      grid: "MC*/PR*1,AP/PR1,G:AP1,MC*/PR*1",
      notification: "G"
   },
   {
      evtype: "9E1",
      evdescriptor: "AFEMR   CARDIAC OR RESP ARREST/DEATH: NOT BREATHING AT ALL",
      grid: "MC*/PR*1,AP/PR1,G:AP1,MC*/PR*1",
      notification: "G"
   },
   {
      evtype: "9E3",
      evdescriptor: "AFPEMR  CARDIAC OR RESP ARREST/DEATH: HANGING",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "10C1",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: ABNORMAL BREATHING",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "10C3",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: BREATHING NORMALLY � 35",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "10D1",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: NOT ALERT",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "10D2",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: DIFFICULTY SPEAKING BETWEEN BREATHS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "10D3",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: CHANGING COLOUR",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "10D4",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: CLAMMY OR COLD SWEATS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "10D5",
      evdescriptor: "A       CHEST PAIN/DISCOMFORT: HEART ATTACK OR ANGINA HISTORY",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "11D1F",
      evdescriptor: "A       CHOKING: ABNORMAL BREATHING (PARTIAL OBSTRUCTION) (FOOD)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "11D2F",
      evdescriptor: "A       CHOKING: NOT ALERT (FOOD)",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "11E1",
      evdescriptor: "A       CHOKING: COMPLETE OBSTRUCTION/NOT BREATHING/INEFFECTIVE BREATHING",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "12D2",
      evdescriptor: "A       CONVULSIONS/FITTING: CONTINUOUS OR MULTIPLE FITTING",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "12D4",
      evdescriptor: "A       CONVULSIONS/FITTING: EFFECTIVE BREATH NOT VERIFIED � 35",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "13C1",
      evdescriptor: "A       DIABETIC PROBLEMS: NOT ALERT",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "13D1",
      evdescriptor: "A       DIABETIC PROBLEMS: UNCONSCIOUS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "14B3",
      evdescriptor: "AP      DROWNING/DIVING: UNKNOWN/OTHER CODES NOT APPLICABLE",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "14C1",
      evdescriptor: "AP      DROWNING/DIVING:  ALERT WITH ABNORMAL BREATHING",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "14D1",
      evdescriptor: "AP      DROWNING/DIVING: UNCONSCIOUS",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "14D4",
      evdescriptor: "AP      DROWNING/DIVING: JUST RESUSCITATED AND/OR DEFIBRILLATED",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "14D5",
      evdescriptor: "AP      DROWNING/DIVING: NOT ALERT",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "14D6",
      evdescriptor: "AP      DROWNING/DIVING: SUSPECTED NECK INJURY",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "14E1",
      evdescriptor: "AFPEMR  DROWNING/DIVING: ARREST (OUT OF WATER)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "14E2",
      evdescriptor: "AFPEMR  DROWNING/DIVING: UNDERWATER (NON-SPECIALISED RESCUE)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "15D1E",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: MULTIPLE VICTIMS (ELECTROCUTION)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D2E",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: UNCONSCIOUS (ELECTROCUTION)",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D2L",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: UNCONSCIOUS (LIGHTNING)",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D7E",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: NOT ALERT (ELECTROCUTION)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D7L",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: NOT ALERT (LIGHTNING)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D8E",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: ABNORMAL BREATHING (ELECTROCUTION)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D8L",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: ABNORMAL BREATHING (LIGHTNING)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D9E",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: UNK/OTH CODES NOT APPLICABLE (ELECTROCUTION)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15D9L",
      evdescriptor: "AP      ELECTROCUTION/LIGHTNING: UNK/OTH CODES NOT APPLICABLE (LIGHTNING)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "15E1E",
      evdescriptor: "AFPEMR  ELECTROCUTION/LIGHTNING: NOT BREATH/INEFFECTIVE BREATH (ELECTROCUTION)",
      grid: "MC*/PR*1,AP/PR1,D:AP1,MC*/PR*1",
      notification: "D"
   },
   {
      evtype: "16B1",
      evdescriptor: "A       EYE PROBLEMS/INJURIES: SEVERE EYE INJURY",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "17A1",
      evdescriptor: "A       FALLS: NOT DANGEROUS BODY AREA WITH DEFORMITY",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "17B1",
      evdescriptor: "AP      FALLS: POSSIBLY DANGEROUS BODY AREA",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "17B2",
      evdescriptor: "AP      FALLS: SERIOUS HAEMORRHAGE",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "17B3P",
      evdescriptor: "A       FALLS: FALL DOWN STAIRS (PUBLIC PLACE)",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "17D1",
      evdescriptor: "AP      FALLS: EXTREME FALL (> 10M/30FT)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "17D2",
      evdescriptor: "AFPEMR  FALLS: ARREST",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "17D3",
      evdescriptor: "A       FALLS: UNCONSCIOUS",
      grid: "AP1,MC/PR2:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "17D4P",
      evdescriptor: "A       FALLS: NOT ALERT (PUBLIC PLACE)",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "17D6",
      evdescriptor: "AP      FALLS: LONG FALL",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "18C1L",
      evdescriptor: "A       HEADACHE: NOT ALERT (<12 HRS SINCE SYMPTOMS STARTED)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "18C2L",
      evdescriptor: "A       HEADACHE: ABNORMAL BREATHING (<12 HRS SINCE SYMPTOMS STARTED)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "18C3L",
      evdescriptor: "A       HEADACHE: SPEECH PROBLEMS (<12 HRS SINCE SYMPTOMS STARTED)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "19C1",
      evdescriptor: "A       HEART PROBLEMS/A.I.C.D: FIRING OF A.I.C.D.",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "19C2",
      evdescriptor: "A       HEART PROBLEMS/A.I.C.D: ABNORMAL BREATHING",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "19C3",
      evdescriptor: "A       HEART PROBLEMS/A.I.C.D: CHEST PAIN/DISCOMFORT � 35 (NPS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "19D1",
      evdescriptor: "A       HEART PROBLEMS/A.I.C.D: NOT ALERT",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "19D2",
      evdescriptor: "A       HEART PROBLEMS/A.I.C.D: DIFFICULTY SPEAKING BETWEEN BREATHS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "20D1C",
      evdescriptor: "AP      HEAT/COLD EXPOSURE: NOT ALERT (COLD EXPOSURE)",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "20D1H",
      evdescriptor: "A       HEAT/COLD EXPOSURE: NOT ALERT (HEAT EXPOSURE)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "21B2T",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: SERIOUS HAEMORRHAGE (TRAUMA)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "21B3M",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: BLEEDING DISORDER (MEDICAL)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "21B4M",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: BLOOD THINNERS (MEDICAL)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "21D1",
      evdescriptor: "AFPEMR  HAEMORRHAGE/LACERATIONS: ARREST",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "21D2T",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: UNCONSCIOUS (TRAUMA)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "21D5M",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: ABNORMAL BREATHING (MEDICAL)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "21D5T",
      evdescriptor: "A       HAEMORRHAGE/LACERATIONS: ABNORMAL BREATHING (TRAUMA)",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "22D1",
      evdescriptor: "AFPR    INACCESSIBLE INCIDENT/ENTRAPMENT: MECHANICAL/MACHINERY",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "22D2",
      evdescriptor: "AFPR    INACCESSIBLE INCIDENT/ENTRAPMENT: TRENCH COLLAPSE",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "22D3",
      evdescriptor: "AFPRS   INACCESSIBLE INCIDENT/ENTRAPMENT: STRUCTURE COLLAPSE",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "22D4",
      evdescriptor: "AFPR    INACCESSIBLE INCIDENT/ENTRAPMENT: CONFINED SPACE",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "23C1",
      evdescriptor: "A       OVERDOSE/POISONING: NOT ALERT",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "23C2",
      evdescriptor: "A       OVERDOSE/POISONING: ABNORMAL BREATHING",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "23C5",
      evdescriptor: "A       OVERDOSE/POISONING: NARCOTICS/DERIVATIVES",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "23C6",
      evdescriptor: "A       OVERDOSE/POISONING: ACID OR ALKALI ",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "23D1",
      evdescriptor: "A       OVERDOSE/POISONING: ARREST",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "23D2",
      evdescriptor: "A       OVERDOSE/POISONING: UNCONSCIOUS",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "23E1A",
      evdescriptor: "A       OVERDOSE/POISONING: NARCOTIC/OPIOID ARREST (ACCIDENTAL)",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "24B2",
      evdescriptor: "A       PREGNANCY: UNKNOWN/OTHER CODES NOT APPLICABLE",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "24C2",
      evdescriptor: "A       PREGNANCY: 1ST TRIMESTER SERIOUS HAEMORRHAGE",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "24C4",
      evdescriptor: "A       PREGNANCY: BABY BORN (NO COMPLICATIONS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "24D1",
      evdescriptor: "A       PREGNANCY: BREECH OR CORD",
      grid: "AP/PR1,NO,C:MC1,AP2",
      notification: "C"
   },
   {
      evtype: "24D2",
      evdescriptor: "A       PREGNANCY: HEAD VISIBLE/OUT",
      grid: "AP/PR1,NO,C:MC1,AP2",
      notification: "C"
   },
   {
      evtype: "24D5",
      evdescriptor: "A       PREGNANCY: HIGH RISK COMPLICATIONS",
      grid: "AP/PR1,NO,C:MC1,AP2",
      notification: "C"
   },
   {
      evtype: "25D1",
      evdescriptor: "AP      PSYCH/ABNORMAL BEHAVIOUR: ARREST",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "25D2",
      evdescriptor: "AP      PSYCH/ABNORMAL BEHAVIOUR: UNCONSCIOUS",
      grid: "AP1,MC/PR2:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "25D4",
      evdescriptor: "AP      PSYCH/ABNORMAL BEHAVIOUR: DANGEROUS HAEMORRHAGE",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "25D4V",
      evdescriptor: "AP      PSYCH/ABNORMAL BEHAVIOUR: DANGEROUS HAEMORRHAGE (VIOLENT)",
      grid: "AP/PR2,D:ARU2,AP/PR2",
      notification: "D"
   },
   {
      evtype: "25D5",
      evdescriptor: "AP      PSYCH/ABNORMAL BEHAVIOUR: NEAR HANG/STRANGU/SUFF (DIFF BREATH)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "27B3G",
      evdescriptor: "AP      STAB/GUNSHOT: SERIOUS HAEMORRHAGE (GSW)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27B3I",
      evdescriptor: "AFPR    STAB/GUNSHOT: SERIOUS HAEMORRHAGE (IMPALED CURRENTLY)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27B3S",
      evdescriptor: "AP      STAB/GUNSHOT: SERIOUS HAEMORRHAGE (STAB)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "27B4G",
      evdescriptor: "AP      STAB/GUNSHOT: UNK/OTH CODES NOT APPLICABLE (GSW)",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "27D1",
      evdescriptor: "AP      STAB/GUNSHOT: ARREST ",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "27D1G",
      evdescriptor: "AFPEMR  STAB/GUNSHOT: ARREST (GSW)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "27D2G",
      evdescriptor: "AP      STAB/GUNSHOT: UNCONSCIOUS (GSW)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "27D2P",
      evdescriptor: "AP      STAB/GUNSHOT: UNCONSCIOUS (PENETRATING/NOT IMPALED)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "27D2S",
      evdescriptor: "AP      STAB/GUNSHOT: UNCONSCIOUS (STAB)",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "27D4G",
      evdescriptor: "AP      STAB/GUNSHOT: CENTRAL WOUNDS (GSW)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27D4I",
      evdescriptor: "AFPR    STAB/GUNSHOT: CENTRAL WOUNDS (IMPALED CURRENTLY)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27D4P",
      evdescriptor: "AP      STAB/GUNSHOT: CENTRAL WOUNDS (PENETRATING/NOT IMPALED)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27D4S",
      evdescriptor: "AP      STAB/GUNSHOT: CENTRAL WOUNDS (STAB)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27D4X",
      evdescriptor: "AP      STAB/GUNSHOT: CENTRAL WOUNDS (SELF INFLICTED GSW)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "27D4Y",
      evdescriptor: "AP      STAB/GUNSHOT: CENTRAL WOUNDS (SELF INFLICTED STAB)",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "28A1L",
      evdescriptor: "A       STROKE: BREATHING NORMALLY < 35 (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C1L",
      evdescriptor: "A       STROKE: NOT ALERT (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C2L",
      evdescriptor: "A       STROKE: ABNORMAL BREATHING (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C3L",
      evdescriptor: "A       STROKE: SUDDEN SPEECH PROBLEMS (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C4L",
      evdescriptor: "A       STROKE: SUDDEN WEAKNESS/NUMBNESS (ONE SIDE) (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C5L",
      evdescriptor: "A       STROKE: SUDDEN PARALYSIS/FACIAL DROOP (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C6L",
      evdescriptor: "A       STROKE: SUDDEN LOSS OF BALANCE/COORDINATION (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "28C7L",
      evdescriptor: "A       STROKE: SUDDEN VISION PROBLEMS (<12 HRS)",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "29A1",
      evdescriptor: "AP      TRAFFIC/TRANSPORT INCIDENT: 1ST PARTY CALLER NOT DANGEROUS INJURY",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "29B1",
      evdescriptor: "AP      TRAFFIC/TRANSPORT INCIDENT: INJURIES",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "29B2",
      evdescriptor: "AP      TRAFFIC/TRANSPORT INCIDENT: SERIOUS HAEMORRHAGE",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "29B3",
      evdescriptor: "AFP     TRAFFIC/TRANSPORT INCIDENT: OTHER HAZARDS",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "29D1H",
      evdescriptor: "AFPR    TRAFFIC/TRANSPORT INCIDENT: MAJOR INCIDENT- VEHICLE VS BUILDING",
      grid: "AP/PR1,NO,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "29D2P",
      evdescriptor: "AFPR    TRAFFIC/TRANSPORT INCIDENT: HIGH MECHANISM- ROLLOVERS",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "29D3",
      evdescriptor: "AFPR    TRAFFIC/TRANSPORT INCIDENT: HIGH VELOCITY IMPACT",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "29D5",
      evdescriptor: "AFPR    TRAFFIC/TRANSPORT INCIDENT: TRAPPED VICTIM",
      grid: "AP/PR1,NO,H:MC1,AP2",
      notification: "H"
   },
   {
      evtype: "29D6",
      evdescriptor: "AFPEMR  TRAFFIC/TRANSPORT INCIDENT: ARREST",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "29D7",
      evdescriptor: "AP      TRAFFIC/TRANSPORT INCIDENT: UNCONSCIOUS",
      grid: "MC*/PR*1,AP/PR1,H:AP1,MC*/PR*1",
      notification: "H"
   },
   {
      evtype: "30A1",
      evdescriptor: "A       TRAUMATIC INJURIES: NOT DANGEROUS BODY AREA WITH DEFORMITY",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "30B2",
      evdescriptor: "AP      TRAUMATIC INJURIES: SERIOUS HAEMORRHAGE",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "30D1",
      evdescriptor: "AFPEMR  TRAUMATIC INJURIES: ARREST",
      grid: "MC*/PR*1,AP/PR1,D:AP1,MC*/PR*1",
      notification: "D"
   },
   {
      evtype: "30D2",
      evdescriptor: "AP      TRAUMATIC INJURIES: UNCONSCIOUS",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "30D5",
      evdescriptor: "AP      TRAUMATIC INJURIES: HIGH VELOCITY IMPACT/MASS INJURY",
      grid: "AP1,MC/PR2,D:MC1,AP2",
      notification: "D"
   },
   {
      evtype: "31C3",
      evdescriptor: "A       UNCONSCIOUS/FAINTING: FEMALES WITH ABDOMINAL PAIN",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "31D4",
      evdescriptor: "A       UNCONSCIOUS/FAINTING: NOT ALERT",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "31D5",
      evdescriptor: "A       UNCONSCIOUS/FAINTING: CHANGING COLOUR",
      grid: "AP/PR1,NO:MC1,AP2",
      notification: "NO"
   },
   {
      evtype: "31E1",
      evdescriptor: "A       UNCONSCIOUS/FAINTING: INEFFECTIVE BREATHING",
      grid: "MC*/PR*1,AP/PR1:AP1,MC*/PR*1",
      notification: "NO"
   },
   {
      evtype: "32B3",
      evdescriptor: "A       UNKNOWN PROBLEM: UNKNOWN/OTHER CODES NOT APPLICABLE",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   },
   {
      evtype: "32D1",
      evdescriptor: "A       UNKNOWN PROBLEM: LIFE STATUS QUESTIONABLE",
      grid: "AP/PR2,NO:ARU2,AP/PR2",
      notification: "NO"
   }
]