export function CompanyLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PrintTodayUK Logo"
    >
      <style>
        {`
            .logo-text {
                font-family: 'Inter', sans-serif;
                font-weight: 800;
                font-size: 32px;
            }
            .logo-uk {
              font-family: 'Inter', sans-serif;
              font-weight: 600;
              font-size: 32px;
            }
        `}
      </style>
      <text x="0" y="30" className="logo-text" fill="hsl(var(--primary))">
        Print<tspan fill="hsl(var(--accent))">Today</tspan>
        <tspan className="logo-uk" fill="hsl(var(--foreground))">UK</tspan>
      </text>
    </svg>
  );
}
