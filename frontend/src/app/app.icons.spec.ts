import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent icons', () => {
  it('should render the header icons through a reusable component', async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const icons = page.querySelectorAll('app-icon');

    expect(icons.length).toBe(3);
    const expectedPaths = [
      ['m16 16 4.2 4.2'],
      ['M5 8h14l1 12H4L5 8Z', 'M9 9V6a3 3 0 0 1 6 0v3'],
      ['M4 7h16M4 12h16M4 17h16'],
    ];
    icons.forEach((icon, index) => {
      const svg = icon.querySelector('svg')!;
      expect(svg.namespaceURI).toBe('http://www.w3.org/2000/svg');
      expect(svg.classList.contains('size-[21px]')).toBe(true);
      expect(svg.getAttribute('viewBox')).toBe('0 0 24 24');
      expect(svg.getAttribute('fill')).toBe('none');
      expect(svg.getAttribute('stroke')).toBe('currentColor');
      expect(svg.getAttribute('stroke-width')).toBe('1.7');
      expect(svg.getAttribute('aria-hidden')).toBe('true');
      expect(Array.from(svg.querySelectorAll('path'), (path) => path.getAttribute('d'))).toEqual(
        expectedPaths[index],
      );
    });
    const circle = icons[0].querySelector('circle')!;
    expect([
      circle.getAttribute('cx'),
      circle.getAttribute('cy'),
      circle.getAttribute('r'),
    ]).toEqual(['10.8', '10.8', '6.5']);
    expect(
      Array.from(page.querySelectorAll('button'), (button) => button.getAttribute('aria-label')),
    ).toEqual(['Buscar productos', 'Bolsa de compras, 0 productos', 'Abrir navegación']);
    expect(page.querySelector('#bagCount')?.textContent).toBe('0');
  });

  it('should own the buttons and use the sketch styles as Tailwind utilities', async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    const page = fixture.nativeElement as HTMLElement;
    const icons = page.querySelectorAll('app-icon');

    icons.forEach((icon) => {
      const button = icon.querySelector('button')!;
      expect(button).not.toBeNull();
      expect(button.getAttribute('type')).toBe('button');
      expect(button.querySelector('svg')).not.toBeNull();
      for (const utility of [
        'relative',
        'grid',
        'size-11',
        'place-items-center',
        'border-0',
        'bg-transparent',
        'cursor-pointer',
        'focus-visible:outline-3',
        'focus-visible:outline-primary',
        'focus-visible:outline-offset-3',
      ]) {
        expect(button.classList.contains(utility)).toBe(true);
      }
    });
    expect(page.querySelector('.icon-button, .menu-button, .od-icon, .bag-count')).toBeNull();
    expect(icons[0].querySelector('button')!.classList.contains('min-[601px]:hidden')).toBe(false);
    expect(icons[2].querySelector('button')!.classList.contains('min-[601px]:hidden')).toBe(true);
    const badge = page.querySelector('#bagCount')!;
    expect(badge.closest('button')).toBe(icons[1].querySelector('button'));
    for (const utility of [
      'absolute',
      'top-0',
      'right-0',
      'min-w-[17px]',
      'h-[17px]',
      'rounded-full',
      'bg-primary',
      'text-white',
      'text-[10px]',
      'leading-[17px]',
      'text-center',
    ]) {
      expect(badge.classList.contains(utility)).toBe(true);
    }
  });
});
