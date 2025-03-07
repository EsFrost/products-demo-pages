# Color Palettes for Next.js E-commerce Project

## Modern and Clean Palette

### Light Mode

- **Background**: #FFFFFF (Pure white)
- **Foreground/Text**: #171717 (Near black)
- **Primary**: #3B82F6 (Bright blue)
- **Primary Hover**: #2563EB (Darker blue)
- **Secondary**: #F97316 (Orange accent)
- **Gray-100**: #F3F4F6 (Lightest gray for subtle backgrounds)
- **Gray-200**: #E5E7EB (Light gray for borders)
- **Gray-300**: #D1D5DB (Medium gray for disabled elements)
- **Gray-400**: #9CA3AF (Darker gray for secondary text)
- **Success**: #10B981 (Green)
- **Error**: #EF4444 (Red)

### Dark Mode

- **Background**: #0A0A0A (Near black)
- **Foreground/Text**: #EDEDED (Off-white)
- **Primary**: #60A5FA (Lighter blue)
  Primary Hover: #93C5FD (Even lighter blue for hover)
  Secondary: #FB923C (Lighter orange)
  Gray-800: #1F2937 (Dark gray for cards/sections)
  Gray-700: #374151 (Medium dark gray for borders)
  Gray-600: #4B5563 (Lighter dark gray for subtle highlights)
  Gray-500: #6B7280 (Light gray for secondary text)
  Success: #34D399 (Lighter green)
  Error: #F87171 (Lighter red)

Professional Tech Palette
Light Mode

Background: #F9FAFB (Off-white)
Foreground/Text: #111827 (Deep black)
Primary: #6366F1 (Indigo)
Primary Hover: #4F46E5 (Darker indigo)
Secondary: #EC4899 (Pink accent)
Gray-100: #F3F4F6 (Lightest gray)
Gray-200: #E5E7EB (Light gray)
Gray-300: #D1D5DB (Medium gray)
Gray-400: #9CA3AF (Darker gray)
Success: #059669 (Green)
Error: #DC2626 (Red)

Dark Mode

Background: #111827 (Deep blue-black)
Foreground/Text: #F9FAFB (Off-white)
Primary: #818CF8 (Lighter indigo)
Primary Hover: #A5B4FC (Even lighter indigo)
Secondary: #F472B6 (Lighter pink)
Gray-800: #1F2937 (Dark gray)
Gray-700: #374151 (Medium dark gray)
Gray-600: #4B5563 (Lighter dark gray)
Gray-500: #6B7280 (Light gray)
Success: #10B981 (Lighter green)
Error: #EF4444 (Lighter red)

Soft and Calming Palette
Light Mode

Background: #FFFFFF (White)
Foreground/Text: #1F2937 (Dark gray)
Primary: #0EA5E9 (Sky blue)
Primary Hover: #0284C7 (Darker sky blue)
Secondary: #8B5CF6 (Purple accent)
Gray-100: #F1F5F9 (Lightest gray)
Gray-200: #E2E8F0 (Light gray)
Gray-300: #CBD5E1 (Medium gray)
Gray-400: #94A3B8 (Darker gray)
Success: #22C55E (Green)
Error: #EF4444 (Red)

Dark Mode

Background: #0F172A (Deep navy)
Foreground/Text: #F1F5F9 (Off-white)
Primary: #38BDF8 (Lighter sky blue)
Primary Hover: #7DD3FC (Even lighter sky blue)
Secondary: #A78BFA (Lighter purple)
Gray-800: #1E293B (Dark gray)
Gray-700: #334155 (Medium dark gray)
Gray-600: #475569 (Lighter dark gray)
Gray-500: #64748B (Light gray)
Success: #4ADE80 (Lighter green)
Error: #F87171 (Lighter red)

Implementation Example
To implement one of these palettes in your project, you would update the globals.css file to include all these color variables:
cssCopy@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
/_ Light mode (default) _/
--background: #ffffff;
--foreground: #171717;
--primary: #3B82F6;
--primary-hover: #2563EB;
--secondary: #F97316;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--success: #10B981;
--error: #EF4444;
}

.dark {
/_ Dark mode _/
--background: #0A0A0A;
--foreground: #EDEDED;
--primary: #60A5FA;
--primary-hover: #93C5FD;
--secondary: #FB923C;
--gray-100: #1F2937; /_ Reversed for dark mode _/
--gray-200: #374151;
--gray-300: #4B5563;
--gray-400: #6B7280;
--success: #34D399;
--error: #F87171;
}

body {
color: var(--foreground);
background: var(--background);
font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
}
Then update your tailwind.config.ts to include these colors:
typescriptCopyimport type { Config } from "tailwindcss";

export default {
content: [
"./pages/**/*.{js,ts,jsx,tsx,mdx}",
"./components/**/*.{js,ts,jsx,tsx,mdx}",
"./app/**/*.{js,ts,jsx,tsx,mdx}",
],
darkMode: "class",
theme: {
extend: {
colors: {
background: "var(--background)",
foreground: "var(--foreground)",
primary: "var(--primary)",
"primary-hover": "var(--primary-hover)",
secondary: "var(--secondary)",
gray: {
100: "var(--gray-100)",
200: "var(--gray-200)",
300: "var(--gray-300)",
400: "var(--gray-400)",
},
success: "var(--success)",
error: "var(--error)",
},
},
},
plugins: [],
} satisfies Config;
This way, you can use these colors in your components with Tailwind classes like bg-primary, text-foreground, border-gray-200, etc., and they'll automatically adapt to dark/light mode when the theme changes.

e-commerce palettes

I'll suggest some e-commerce oriented color palettes that would work well for your Next.js project. These palettes are designed specifically with online shopping in mind, focusing on trust, product showcase, and conversion optimization.
E-Commerce Focused Palette 1: Premium & Trustworthy
Light Mode

Background: #FFFFFF (Clean white for product display)
Foreground/Text: #1A202C (Dark gray-blue, easier on eyes than pure black)
Primary: #4F46E5 (Deep indigo - conveys trust and reliability)
Primary Hover: #4338CA (Darker indigo for hover states)
Secondary: #F59E0B (Amber for call-to-actions and highlights)
Accent: #EC4899 (Pink for sales/discounts/specials)
Gray-100: #F7FAFC (Subtle background for product cards)
Gray-200: #EDF2F7 (Light gray for borders)
Gray-300: #E2E8F0 (Medium gray for dividers)
Gray-400: #A0AEC0 (Darker gray for secondary text)
Success: #10B981 (Green for in-stock, confirmations)
Error: #EF4444 (Red for out-of-stock, errors)
Warning: #F59E0B (Amber for limited stock)

Dark Mode

Background: #0F172A (Deep navy, elegant for showcasing products)
Foreground/Text: #E2E8F0 (Off-white, easier on eyes)
Primary: #818CF8 (Lighter indigo)
Primary Hover: #A5B4FC (Even lighter indigo)
Secondary: #FBBF24 (Brighter amber for better visibility)
Accent: #F472B6 (Lighter pink for sales/highlights)
Gray-800: #1E293B (Dark gray for cards)
Gray-700: #334155 (Medium dark gray for borders)
Gray-600: #475569 (Lighter dark gray)
Gray-500: #64748B (Light gray for secondary text)
Success: #34D399 (Lighter green)
Error: #F87171 (Lighter red)
Warning: #FBBF24 (Brighter amber)

E-Commerce Focused Palette 2: Modern Shopping Experience
Light Mode

Background: #FCFCFC (Slightly off-white, easier on eyes)
Foreground/Text: #111827 (Near black)
Primary: #2563EB (Royal blue - universally trusted in e-commerce)
Primary Hover: #1D4ED8 (Darker blue)
Secondary: #10B981 (Teal green for CTAs, adds variety)
Accent: #DB2777 (Deep pink for promotions/sales)
Gray-100: #F9FAFB (Faint gray for product card backgrounds)
Gray-200: #F3F4F6 (Light gray for hover states)
Gray-300: #E5E7EB (Medium gray for borders)
Gray-400: #9CA3AF (Dark gray for less important text)
Price: #111827 (Emphasized price text)
Sale Price: #DC2626 (Red for sale prices)
Success: #059669 (Deep green for confirmations/availability)
Error: #DC2626 (Red for errors/out of stock)

Dark Mode

Background: #121212 (Near black but not pure black)
Foreground/Text: #F9FAFB (Off-white)
Primary: #3B82F6 (Bright blue, stands out in dark mode)
Primary Hover: #60A5FA (Lighter blue)
Secondary: #34D399 (Brighter teal green)
Accent: #EC4899 (Brighter pink for promotions)
Gray-800: #1F2937 (Dark gray for cards)
Gray-700: #374151 (Medium dark gray for borders)
Gray-600: #4B5563 (Lighter dark gray for hover states)
Gray-500: #6B7280 (Light gray for secondary text)
Price: #F9FAFB (White for price text)
Sale Price: #F87171 (Bright red for sale prices)
Success: #10B981 (Bright green)
Error: #EF4444 (Bright red)

E-Commerce Focused Palette 3: Conversion-Optimized
Light Mode

Background: #FFFFFF (Pure white for clean product displays)
Foreground/Text: #18181B (Off-black for better readability)
Primary: #0369A1 (Trustworthy deep blue)
Primary Hover: #0284C7 (Slightly lighter blue for feedback)
Secondary: #16A34A (Green for "buy now" or main CTAs)
Accent: #CA8A04 (Gold/amber for "limited time" offers)
Alert: #DC2626 (Red for "almost sold out" messaging)
Gray-100: #F4F4F5 (Very subtle gray for backgrounds)
Gray-200: #E4E4E7 (Light gray for borders)
Gray-300: #D4D4D8 (Medium gray for dividers)
Gray-400: #A1A1AA (Darker gray for less important text)
Price: #000000 (Black for price emphasis)
Sale Price: #DC2626 (Red for sale prices)
Reviews: #EAB308 (Gold for star ratings)

Dark Mode

Background: #18181B (Dark charcoal instead of pure black)
Foreground/Text: #FAFAFA (Slightly off-white)
Primary: #0EA5E9 (Sky blue, high visibility)
Primary Hover: #38BDF8 (Lighter sky blue)
Secondary: #22C55E (Bright green for CTAs)
Accent: #EAB308 (Bright gold for special offers)
Alert: #EF4444 (Bright red for alerts)
Gray-800: #27272A (Dark gray for cards)
Gray-700: #3F3F46 (Medium dark gray for borders)
Gray-600: #52525B (Gray for subtle separations)
Gray-500: #71717A (Light gray for secondary text)
Price: #FFFFFF (White for price emphasis)
Sale Price: #F87171 (Lighter red for sale prices)
Reviews: #FACC15 (Bright gold for star ratings)

Implementation Example
Here's how you could implement the first e-commerce palette in your project:
cssCopy@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
/_ Light mode (default) - Premium & Trustworthy palette _/
--background: #FFFFFF;
--foreground: #1A202C;
--primary: #4F46E5;
--primary-hover: #4338CA;
--secondary: #F59E0B;
--accent: #EC4899;
--gray-100: #F7FAFC;
--gray-200: #EDF2F7;
--gray-300: #E2E8F0;
--gray-400: #A0AEC0;
--success: #10B981;
--error: #EF4444;
--warning: #F59E0B;
--price: #1A202C;
--sale-price: #EF4444;
}

.dark {
/_ Dark mode _/
--background: #0F172A;
--foreground: #E2E8F0;
--primary: #818CF8;
--primary-hover: #A5B4FC;
--secondary: #FBBF24;
--accent: #F472B6;
--gray-100: #1E293B;
--gray-200: #334155;
--gray-300: #475569;
--gray-400: #64748B;
--success: #34D399;
--error: #F87171;
--warning: #FBBF24;
--price: #FFFFFF;
--sale-price: #F87171;
}

body {
color: var(--foreground);
background: var(--background);
font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
}
For your tailwind.config.ts:
typescriptCopyimport type { Config } from "tailwindcss";

export default {
content: [
"./pages/**/*.{js,ts,jsx,tsx,mdx}",
"./components/**/*.{js,ts,jsx,tsx,mdx}",
"./app/**/*.{js,ts,jsx,tsx,mdx}",
],
darkMode: "class",
theme: {
extend: {
colors: {
background: "var(--background)",
foreground: "var(--foreground)",
primary: "var(--primary)",
"primary-hover": "var(--primary-hover)",
secondary: "var(--secondary)",
accent: "var(--accent)",
gray: {
100: "var(--gray-100)",
200: "var(--gray-200)",
300: "var(--gray-300)",
400: "var(--gray-400)",
},
success: "var(--success)",
error: "var(--error)",
warning: "var(--warning)",
price: "var(--price)",
"sale-price": "var(--sale-price)",
},
},
},
plugins: [],
} satisfies Config;
These e-commerce-focused palettes are designed to:

Create trust and credibility
Emphasize calls-to-action
Make product images stand out
Clearly highlight prices, discounts, and availability
Provide visual cues for important shopping states like "in stock," "on sale," or "limited quantity"

All while working well in both light and dark modes for your Next.js e-commerce site.
