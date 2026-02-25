# Backend Updates Index - All Changes & Customizations

This document lists every "BACKEND UPDATE" comment in the codebase for easy reference.

## Home Page (/app/page.tsx)

### Line ~28: Loader Duration
**Change Duration**: Shows loader for 2 seconds on page load
```javascript
useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 2000) // Change 2000 to your desired milliseconds
  return () => clearTimeout(timer)
}, [])
```
- Current: 2000ms (2 seconds)
- Example: 3000ms (3 seconds), 1000ms (1 second)

---

## Hero Slider (/components/sections/HeroSlider.tsx)

### Lines 19-37: Background Images (3 ROTATING IMAGES)
**IMPORTANT**: Replace gradient placeholders with actual image URLs
```javascript
const backgroundImages = [
  "url('/images/hero-bg-1.jpg')",           // Replace this
  "url('/images/hero-bg-2.jpg')",           // Replace this
  "url('/images/hero-bg-3.jpg')",           // Replace this
]
```
**Image Specifications**:
- Minimum size: 2000x1200px
- Format: JPG or WebP (better performance)
- Upload location: `/public/images/`
- Or use cloud storage URL: `https://your-storage.com/image.jpg`

### Line 48: Slide Rotation Interval
**Change Auto-Rotation Speed**: Currently rotates every 5 seconds
```javascript
setInterval(() => {
  setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
}, 5000) // Change 5000 to your desired milliseconds
```
- Current: 5000ms (5 seconds)
- Example: 3000ms (3 seconds), 10000ms (10 seconds)

### Lines 72-78: Hero Text Content
**Edit Title and Subtitle**:
```javascript
slides = [
  { title: "Manvam Foundation", subtitle: "We are here for help" }
  // Change text here
]
```

---

## Donation Modal (/components/DonateModal.tsx)

### Lines 60-73: Payment Gateway Integration
**CRITICAL**: Replace alert with actual payment processing
```javascript
const handlePaymentMethod = (method: string) => {
  // Current: Shows alert
  // TODO: Integrate with Razorpay, PayU, or other gateway
  
  // See SETUP_GUIDE.md → "Adding Donation Platform" for full instructions
}
```

**To Integrate**:
1. Install payment package: `npm install razorpay`
2. Add API keys to `.env.local`
3. Replace this function with gateway code
4. Test in sandbox mode first

---

## About Us Page (/app/about/page.tsx)

### Lines 29-95: Founder Information & Photos

#### Founder 1: Avneesh Kumar Singh (Chairman & Founder)
**Location**: Lines 32-40
**Image Size**: 320x320px
**Update**: Replace emoji with image path
```javascript
image: "👨‍💼" // CHANGE TO: "/images/founder-avneesh.jpg"
```

#### Founder 2: Neelam Singh (Vice Chairman)
**Location**: Lines 43-65
**Image Size**: 320x320px
**Update**: Replace emoji with image path
```javascript
image: "👩‍💼" // CHANGE TO: "/images/founder-neelam.jpg"
```

#### Founder 3: Santosh Kumar Pal (Treasurer)
**Location**: Lines 68-85
**Image Size**: 320x320px
**Update**: Replace emoji with image path
```javascript
image: "👨‍💼" // CHANGE TO: "/images/founder-santosh.jpg"
```

### Lines 100-110: Mentor Information & Photos

#### Mentor: Ashish Singh
**Location**: Lines 103-110
**Image Size**: 288x288px
**Update**: Replace emoji with image path
```javascript
image: "👨‍🏫" // CHANGE TO: "/images/mentor-ashish.jpg"
```

**Image Upload Steps**:
1. Create `/public/images/` folder if not exists
2. Add images: founder-avneesh.jpg, founder-neelam.jpg, founder-santosh.jpg, mentor-ashish.jpg
3. Or use cloud storage and paste full URL

---

## Campaigns Page (/app/campaigns/page.tsx)

### Lines 19-32: Add More Campaigns
**How to Add New Campaign**:
```javascript
const campaigns = [
  {
    id: 1,
    title: "Campaign Name",
    description: "Short description",
    longDescription: "Detailed description",
    status: "active"
  },
  // ADD NEW CAMPAIGN HERE - Copy above and change id to 2
  {
    id: 2,
    title: "New Campaign",
    // ... rest of fields
  }
]
```

**Fields Explained**:
- `id`: Unique number (1, 2, 3, etc)
- `title`: Campaign name
- `description`: Short summary
- `longDescription`: Full description with details
- `status`: "active" or "completed"
- `icon`: Emoji or icon character

### Lines 89-108: Campaign Images
**Add Campaign Photos**:
Replace the two placeholder divs with actual images
```javascript
<div className="aspect-video ...">
  {/* CURRENT: Placeholder */}
  {/* ADD IMAGE HERE */}
  {/* Example: <img src="/images/campaign-healthcare-1.jpg" alt="..."> */}
</div>
```

**Image Specifications**:
- Format: JPG, PNG, or WebP
- Size: Aspect ratio 16:9 (example: 1280x720px)
- Upload location: `/public/images/`

---

## Documents Page (/app/documents/page.tsx)

### Lines 15-50: Add Documents (PDF or Image)
**How to Add New Document**:
```javascript
const documentsData = [
  // Existing documents...
  
  // ADD NEW DOCUMENT - Copy existing and modify
  {
    id: 4,                                    // New unique ID
    title: "Document Name",                   // Display name
    type: "pdf",                              // "pdf" or "image"
    description: "What this document is",     // Description
    uploadDate: "2025-01-20",                 // Date added
    url: "/documents/filename.pdf",           // File path
  }
]
```

**Upload Steps**:
1. Create `/public/documents/` folder
2. Upload your PDF or image file
3. Add object to `documentsData` array with correct `url` path
4. Example URLs:
   - Local: `/documents/report-2024.pdf`
   - Cloud: `https://your-storage.com/report-2024.pdf`

**Supported Types**:
- PDF files: Set type to `"pdf"`
- Images: Set type to `"image"` (JPG, PNG, WebP)

---

## Gallery Page (/app/gallery/page.tsx)

### Gallery Images Data
**Location**: `/data/gallery.ts`
**How to Add Images**:
```typescript
export const galleryItems = [
  {
    id: 1,
    title: "Image Title",
    image: "/images/gallery-1.jpg"  // Update image path
  },
  // Add more images with unique IDs
]
```

---

## Documents Storage Locations

### File Organization for Production
```
/public/
├── images/
│   ├── hero-bg-1.jpg          ← Home page background 1
│   ├── hero-bg-2.jpg          ← Home page background 2
│   ├── hero-bg-3.jpg          ← Home page background 3
│   ├── founder-avneesh.jpg    ← Founder photo
│   ├── founder-neelam.jpg     ← Founder photo
│   ├── founder-santosh.jpg    ← Founder photo
│   ├── mentor-ashish.jpg      ← Mentor photo
│   ├── gallery-1.jpg          ← Gallery image
│   ├── gallery-2.jpg          ← Gallery image
│   └── campaign-healthcare.jpg ← Campaign image
│
└── documents/
    ├── annual-report-2024.pdf
    ├── healthcare-initiative.pdf
    └── community-impact.jpg
```

### On Production (Domain)
- **Vercel**: Files from `/public` auto-deployed
- **Cloud Storage**: Upload to AWS S3, Cloudinary
- **Your Server**: Upload to `/public_html/uploads/`

---

## Environment Variables (.env.local)

### Required for Payment Integration
```
# Razorpay
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_public_key
RAZORPAY_KEY_SECRET=your_secret_key

# PayU (alternative)
PAYU_MERCHANT_KEY=your_key
PAYU_MERCHANT_SALT=your_salt

# Email notifications (optional)
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=your_key
```

---

## File-by-File Change Summary

| File | Type | Changes Needed | Difficulty |
|------|------|---|---|
| `/components/sections/HeroSlider.tsx` | Images | Add 3 background images | Easy |
| `/app/about/page.tsx` | Images | Add 4 photos (founders + mentor) | Easy |
| `/app/campaigns/page.tsx` | Images | Add 2 campaign photos | Easy |
| `/app/documents/page.tsx` | Data | Add PDFs/images | Easy |
| `/data/gallery.ts` | Data | Add gallery images | Easy |
| `/components/DonateModal.tsx` | Code | Integrate payment gateway | Hard |
| `.env.local` | Config | Add API keys | Medium |

---

## Quick Checklist for Going Live

### Images (Easy)
- [ ] Add 3 hero background images to `/public/images/`
- [ ] Add 4 team member photos to `/public/images/`
- [ ] Add campaign images to `/public/images/`
- [ ] Add gallery images to `/public/images/`
- [ ] Update all file paths in code

### Content (Easy)
- [ ] Add documents to `/public/documents/`
- [ ] Update About page team descriptions (if needed)
- [ ] Add campaigns (if adding more)

### Payment (Hard)
- [ ] Choose payment provider (Razorpay/PayU)
- [ ] Get API keys
- [ ] Add to `.env.local`
- [ ] Update `handlePaymentMethod` in DonateModal.tsx
- [ ] Test payment flow

### Deployment (Medium)
- [ ] Push code to GitHub
- [ ] Deploy to Vercel/Netlify
- [ ] Connect custom domain
- [ ] Enable HTTPS/SSL
- [ ] Test all pages on live domain

---

## Getting Help

**Issue**: Image not showing
- Check `/public/images/` folder exists
- Verify image filename matches code
- Check browser console for 404 errors

**Issue**: Payment not working
- Verify API keys in `.env.local`
- Test in sandbox mode first
- Check payment gateway account is active

**Issue**: Build fails
- Delete `node_modules` and `.next`
- Run `npm install` again
- Check for syntax errors in your edits

---

**Last Updated**: January 2025
**For Complete Guide**: See SETUP_GUIDE.md
**For Quick Navigation**: See QUICK_REFERENCE.md
