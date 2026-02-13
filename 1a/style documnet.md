# Butter Pizza - Styling Documentation

## Overview

This document provides comprehensive documentation for all CSS classes and Bootstrap components used in the Butter Pizza website. The styling system combines custom CSS with Bootstrap 5 for a modern, responsive pizza ordering website.

## Color Scheme & CSS Variables

### Primary Color Palette

```css
:root {
  --primary: #ff6b35; /* Orange - Main brand color */
  --primary-hover: #e55a2b; /* Darker orange for hover states */
  --secondary: #4a90e2; /* Blue - Secondary actions */
  --secondary-hover: #357abd; /* Darker blue for hover states */
  --accent: #f5a623; /* Yellow - Highlights and accents */
  --accent-hover: #e0961a; /* Darker yellow for hover states */
}
```

### Neutral Colors

```css
:root {
  --dark: #2d3748; /* Dark gray - Primary text */
  --dark-light: #4a5568; /* Medium gray - Secondary text */
  --light: #f7fafc; /* Light gray - Background */
  --light-gray: #edf2f7; /* Card backgrounds */
  --border: #e2e8f0; /* Borders and dividers */
}
```

### Status Colors

```css
:root {
  --success: #48bb78; /* Green - Success states */
  --danger: #e53e3e; /* Red - Error states */
  --warning: #ed8936; /* Orange - Warning states */
  --info: #4299e1; /* Blue - Information states */
}
```

## Custom CSS Classes

### Layout & Structure

#### `.navbar`

**Purpose:** Custom navigation bar styling
**Features:**

- Gradient background from dark to dark-light
- Box shadow for depth
- Smooth transitions
- Responsive padding

#### `.hero-section`

**Purpose:** Main banner/hero area on each page
**Features:**

- Gradient background (primary to secondary)
- Centered content with text shadow
- Subtle background pattern overlay
- Responsive padding and typography

#### `.footer`

**Purpose:** Site footer with company information
**Features:**

- Gradient background matching navbar
- Responsive layout
- Hover effects on links
- Proper spacing and typography

### Components

#### `.btn-primary-custom`

**Purpose:** Primary action buttons (Order Now, Add to Cart, etc.)
**Features:**

- Gradient background (primary colors)
- Box shadow for depth
- Hover animation (lift effect)
- Enhanced shadow on hover

#### `.btn-secondary-custom`

**Purpose:** Secondary action buttons
**Features:**

- Gradient background (secondary colors)
- Similar hover effects to primary buttons
- Used for less important actions

#### `.btn-outline-primary`

**Purpose:** Outlined buttons for secondary actions
**Features:**

- Transparent background with colored border
- Color change to filled on hover
- Lift animation on hover

#### `.btn-outline-light`

**Purpose:** Light outlined buttons (used in dark areas)
**Features:**

- White border with transparent background
- Subtle background on hover
- Used in driver cards and modals

### Cards

#### `.card`

**Purpose:** Base card component
**Features:**

- Rounded corners (15px border-radius)
- Subtle box shadow
- Hover animation (lift effect)
- Smooth transitions

#### `.card-modern`

**Purpose:** Enhanced card variant
**Features:**

- Clean white background
- Subtle border
- Consistent with modern design trends

#### `.pizza-card`

**Purpose:** Product cards for pizza items
**Features:**

- Image hover zoom effect
- Equal height cards
- Price highlighting
- Smooth scaling animation

#### `.offer-card`

**Purpose:** Special offer/promotion cards
**Features:**

- Positioned badges
- Enhanced hover effects
- Relative positioning for overlays

#### `.cart-item`

**Purpose:** Individual items in shopping cart
**Features:**

- Light gray background
- Hover to white background
- Responsive layout changes
- Smooth transitions

### Forms

#### `.form-control-modern`

**Purpose:** Enhanced form inputs
**Features:**

- Thick borders (2px)
- Rounded corners
- Focus glow effect (primary color)
- Smooth transitions

#### `.form-label`

**Purpose:** Form field labels
**Features:**

- Bold font weight
- Consistent color
- Proper spacing

### Navigation & UI Elements

#### `.home-btn`

**Purpose:** Fixed home button (top-left corner)
**Features:**

- Circular design
- Gradient background
- Scale animation on hover
- Fixed positioning with high z-index

#### `.cart-count`

**Purpose:** Badge showing number of items in cart
**Features:**

- Circular red badge
- Absolute positioning
- Auto-hide when empty

#### `.logo-icon`

**Purpose:** Pizza slice icon in navbar
**Features:**

- Accent color
- Larger size for brand recognition

### Typography

#### `.text-gradient`

**Purpose:** Gradient text effect
**Features:**

- Primary to accent color gradient
- Webkit and standard support
- Used for headings and highlights

#### `.hero-title`

**Purpose:** Main headings in hero sections
**Features:**

- Large font size (responsive)
- Bold weight
- Text shadow for readability

#### `.hero-subtitle`

**Purpose:** Secondary text in hero sections
**Features:**

- Medium font size
- Reduced opacity
- Centered layout

### Special Components

#### `.cart-total`

**Purpose:** Order summary sidebar in cart
**Features:**

- Gradient background (secondary colors)
- Sticky positioning
- White text for contrast
- Rounded corners

#### `.driver-card`

**Purpose:** Driver information card in tracking page
**Features:**

- Dark gradient background
- White text
- Professional appearance

### Tracking Page Components

#### `.tracking-container`

**Purpose:** Timeline container for order tracking
**Features:**

- Left padding for timeline line
- Relative positioning

#### `.timeline-step`

**Purpose:** Individual steps in tracking timeline
**Features:**

- Flex layout with icon and content
- Relative positioning for connectors

#### `.step-icon`

**Purpose:** Circular icons in tracking timeline
**Features:**

- Color-coded states (gray, green, orange)
- Pulse animation for active step
- Smooth transitions

#### `.step-connector`

**Purpose:** Vertical lines connecting timeline steps
**Features:**

- Absolute positioning
- Color changes based on completion status

### Utility Classes

#### `.shadow-soft`

**Purpose:** Subtle shadow effect
**Features:**

- Lighter shadow than default cards
- Used for secondary elements

#### `.text-primary-custom`

**Purpose:** Force primary color text
**Features:**

- Overrides other text colors
- Important declaration

#### `.bg-primary-custom`

**Purpose:** Force primary color background
**Features:**

- Direct background color application

#### `.border-primary-custom`

**Purpose:** Force primary color borders
**Features:**

- Consistent border coloring

## Bootstrap Classes Used

### Layout System

#### Container Classes

- `.container` - Fixed-width container with responsive margins
- `.container-fluid` - Full-width container (not used in this project)

**Why used:** Provides consistent content width and centering across all screen sizes

#### Grid System

- `.row` - Flex container for columns
- `.col-md-4`, `.col-md-6`, `.col-md-8`, `.col-lg-8` - Responsive column sizing
- `.col-12` - Full-width columns
- `.g-4` - Gap between grid items (1.5rem)

**Why used:** Creates responsive layouts that adapt to different screen sizes

#### Flexbox Utilities

- `.d-flex` - Display flex
- `.justify-content-center` - Center content horizontally
- `.justify-content-between` - Space between items
- `.align-items-center` - Center items vertically
- `.flex-column` - Stack items vertically
- `.flex-fill` - Equal width flex items

**Why used:** Precise control over element positioning and alignment

### Spacing

- `.my-5` - Margin top/bottom 3rem
- `.mb-4`, `.mb-3` - Margin bottom variations
- `.mt-3`, `.mt-4` - Margin top variations
- `.p-4`, `.p-5` - Padding all sides
- `.px-3`, `.py-3` - Padding x/y axis
- `.me-2` - Margin end (right in LTR)

**Why used:** Consistent spacing throughout the design system

### Typography

- `.text-center` - Center text alignment
- `.text-muted` - Muted text color
- `.text-primary` - Primary color text
- `.text-success` - Success color text
- `.text-white` - White text
- `.fw-bold` - Bold font weight
- `.h5`, `.h4` - Heading sizes
- `.display-4`, `.display-5` - Large display headings

**Why used:** Semantic text styling and hierarchy

### Components

#### Buttons

- `.btn` - Base button class
- `.btn-primary` - Primary button variant
- `.btn-outline-primary` - Outlined primary button
- `.btn-outline-light` - Light outlined button
- `.btn-lg` - Large button size
- `.btn-sm` - Small button size

**Why used:** Consistent button styling with Bootstrap's design system

#### Cards

- `.card` - Card container
- `.card-body` - Card content area
- `.card-title` - Card title
- `.card-text` - Card text content
- `.card-img-top` - Top-aligned card image

**Why used:** Structured content presentation with consistent styling

#### Forms

- `.form-control` - Form input fields
- `.form-label` - Form field labels
- `.form-check` - Checkbox/radio wrapper
- `.form-check-input` - Checkbox/radio inputs
- `.form-check-label` - Checkbox/radio labels
- `.needs-validation` - Form validation wrapper
- `.was-validated` - Validation state class

**Why used:** Accessible and consistent form styling

#### Navigation

- `.navbar` - Navigation container
- `.navbar-expand-lg` - Responsive navbar breakpoint
- `.navbar-brand` - Brand/logo area
- `.navbar-toggler` - Mobile menu toggle
- `.navbar-collapse` - Collapsible menu area
- `.navbar-nav` - Navigation list
- `.nav-link` - Individual navigation links

**Why used:** Responsive navigation with mobile hamburger menu

#### Utilities

- `.bg-white` - White background
- `.bg-light` - Light background
- `.text-decoration-none` - Remove text decoration
- `.rounded` - Border radius
- `.rounded-circle` - Circular border radius
- `.border` - Add border
- `.border-3` - Thick border
- `.shadow` - Box shadow
- `.position-relative` - Relative positioning
- `.position-absolute` - Absolute positioning
- `.sticky-top` - Sticky positioning
- `.d-block` - Block display
- `.d-inline` - Inline display
- `.d-none` - Hide element
- `.w-100` - Full width
- `.h-100` - Full height
- `.opacity-75` - 75% opacity
- `.overflow-hidden` - Hide overflow

**Why used:** Quick styling utilities without custom CSS

### Responsive Breakpoints

#### Mobile First Approach

- No prefix: Mobile devices (<576px)
- `sm`: Small devices (≥576px)
- `md`: Medium devices (≥768px)
- `lg`: Large devices (≥992px)
- `xl`: Extra large devices (≥1200px)

**Why used:** Mobile-first responsive design ensures the site works on all devices

## Responsive Design Features

### Breakpoints Used

- **Large Desktop (≥1200px):** Enhanced typography, wider containers
- **Desktop (992px-1199px):** Standard desktop layout
- **Tablet (768px-991px):** Adjusted spacing and typography
- **Mobile (≤767px):** Stacked layouts, smaller elements
- **Small Mobile (≤576px):** Single column, full-width buttons

### Mobile Optimizations

- Collapsible navigation menu
- Stacked card layouts
- Adjusted font sizes
- Touch-friendly button sizes
- Responsive images

## Accessibility Features

### Focus Management

- Visible focus outlines on interactive elements
- High contrast focus indicators
- Keyboard navigation support

### Motion Preferences

- Respects `prefers-reduced-motion` setting
- Disabled animations for users who prefer reduced motion

### High Contrast Support

- Enhanced color palette for high contrast mode
- Better visibility in `prefers-contrast: high`

### Screen Reader Support

- Semantic HTML structure
- Proper ARIA labels where needed
- Color-independent design

## Performance Considerations

### CSS Optimizations

- CSS Variables for consistent theming
- Efficient selectors
- Minimal specificity conflicts
- Modular class structure

### Loading Strategy

- Single comprehensive stylesheet
- Above-the-fold content prioritized
- Minimal render-blocking CSS

## Browser Support

### Supported Browsers

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### CSS Features Used

- CSS Grid (not extensively used)
- Flexbox (Bootstrap dependent)
- CSS Variables (modern browser support)
- CSS Animations and Transitions
- CSS Gradients
- CSS Transforms

## Maintenance Notes

### Adding New Components

1. Use existing CSS variables for colors
2. Follow naming conventions (BEM-like)
3. Include responsive breakpoints
4. Test across all screen sizes
5. Ensure accessibility compliance

### Modifying Colors

- Update CSS variables in `:root`
- Changes propagate throughout the site
- Test contrast ratios for accessibility

### Extending Bootstrap

- Custom classes override Bootstrap defaults
- Maintain Bootstrap's responsive behavior
- Document custom modifications

## File Structure

```
pizza/
├── styles.css          # Main stylesheet (this file)
├── index.html          # Home page
├── order.html          # Order pizza page
├── cart.html           # Shopping cart
├── offers.html         # Special offers
├── login.html          # Login page
├── register.html       # Registration
├── track.html          # Order tracking
└── docs.html           # Documentation (tracking page)
```

This documentation provides a complete reference for maintaining and extending the Butter Pizza website's styling system.
