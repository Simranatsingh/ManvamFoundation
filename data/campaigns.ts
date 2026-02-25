// BACKEND UPDATE: Campaign Management
// To add a new campaign:
// 1. Add new object to this array
// 2. Follow the same structure as existing campaigns
// 3. Each campaign needs: id, title, description, status, details
// 4. The campaign will automatically appear on the campaigns page
// Future campaigns can be added here and will appear in the campaigns page

export const campaignsData = [
  {
    id: 1,
    title: "Healthcare Access for Underprivileged Communities",
    description:
      "Our healthcare initiative focuses on bringing essential medical support to underprivileged families in rural areas. We work tirelessly to provide hearing aids, wheelchairs, prescription glasses, and other critical medical devices to those who cannot afford them.",
    status: "active",
    details: `Through our Healthcare Access Campaign, we are making a real difference in the lives of underprivileged communities. Here's what we are doing:

**What We Provide:**
- Hearing Aids: For individuals with hearing loss who cannot access expensive hearing devices
- Wheelchairs: Mobility solutions for elderly and disabled community members
- Prescription Glasses: Vision correction for students and workers in rural areas
- Medical Consultations: Free health camps and expert medical advice

**How We Work:**
We conduct regular healthcare awareness camps in villages, educating people about the importance of hearing health, mobility aids, and vision care. Our trained volunteers partner with local health workers and medical professionals to assess needs and provide proper fittings. We ensure that every device is customized to the individual's needs for maximum comfort and effectiveness.

**Our Impact:**
Each year, we reach hundreds of families across remote areas, significantly improving their quality of life. People who were previously isolated due to hearing loss now participate actively in their communities. Students with vision problems can now read and learn properly. Elderly members regain their mobility and independence.

**Watch Our Journey:**
To see the full context of our work and the real impact we are creating, please visit our YouTube channel: www.youtube.com/@ManvamFoundation

Your support helps us continue this vital work and reach more communities in need.`,
    icon: "🏥",
  },

  // BACKEND UPDATE: Add more campaigns here by copying the above structure and changing the values
  // Example:
  // {
  //   id: 2,
  //   title: "Campaign Title",
  //   description: "Short description",
  //   status: "active",
  //   details: "Detailed information",
  //   icon: "emoji",
  // },
]
