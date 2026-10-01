export const orders = [
  { id: "AS-2841", customer: "Mireille N.", phone: "+237 6 77 24 90 12", date: "Today, 10:42", items: 3, total: "FCFA 248,000", payment: "Paid", status: "Processing" },
  { id: "AS-2840", customer: "Jean-Paul M.", phone: "+237 6 99 11 38 04", date: "Today, 09:18", items: 1, total: "FCFA 86,500", payment: "Pending", status: "Pending" },
  { id: "AS-2839", customer: "Nadine E.", phone: "+237 6 55 08 12 67", date: "Yesterday, 17:34", items: 5, total: "FCFA 412,000", payment: "Paid", status: "Fulfilled" },
  { id: "AS-2838", customer: "Armand T.", phone: "+237 6 74 61 09 22", date: "Yesterday, 15:05", items: 2, total: "FCFA 175,000", payment: "Paid", status: "Processing" },
  { id: "AS-2837", customer: "Solange B.", phone: "+237 6 96 30 44 10", date: "Sep 29, 12:21", items: 1, total: "FCFA 64,000", payment: "Refunded", status: "Cancelled" },
];

export const bookings = [
  { time: "09:00", name: "Yannick F.", service: "Site consultation", location: "Bonamoussadi", status: "Confirmed" },
  { time: "11:30", name: "Carine A.", service: "Finish selection", location: "Akwa showroom", status: "Confirmed" },
  { time: "14:00", name: "Boris K.", service: "Project review", location: "Makepe", status: "Requested" },
  { time: "16:30", name: "Aïcha D.", service: "Site measurement", location: "Bonapriso", status: "Confirmed" },
];

export const products = [
  { name: "Travertine Ivory", sku: "STN-TRV-012", category: "Natural stone", price: "FCFA 38,500", stock: 8, active: true },
  { name: "Graphite Porcelain", sku: "TIL-GPH-024", category: "Porcelain", price: "FCFA 24,000", stock: 64, active: true },
  { name: "Terra Clay Tile", sku: "TIL-TER-018", category: "Terracotta", price: "FCFA 19,500", stock: 3, active: true },
  { name: "Mosaic Riverstone", sku: "MOS-RIV-006", category: "Mosaic", price: "FCFA 31,000", stock: 27, active: false },
];
