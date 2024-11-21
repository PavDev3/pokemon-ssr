import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pokemon-list-skeleton',
  standalone: true,
  template: `
    <div class="animate-pulse flex flex-col items-center">
      <div class="pokeball w-32 h-32 relative mb-2">
        <div class="top-half bg-gray-300 rounded-t-full h-1/2"></div>
        <div class="bottom-half bg-gray-300 rounded-b-full h-1/2"></div>
        <div
          class="middle-line bg-gray-300 h-[12px] w-full absolute top-[calc(50%-6px)]"
        ></div>
        <div
          class="center-circle w-[24px] h-[24px] bg-gray-300 rounded-full absolute
          top-[calc(50%-12px)] left-[calc(50%-12px)]"
        ></div>
      </div>
      <div class="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
    </div>
  `,
  styles: [
    `
      .pokeball {
        animation: bounce 2s infinite;
      }

      @keyframes bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListSkeletonComponent {}
