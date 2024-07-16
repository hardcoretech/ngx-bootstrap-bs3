import { getClientRect, getOuterSizes, getStyleComputedProperty } from '../utils';
export function arrow(data) {
    let targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    const arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    const isVertical = ['left', 'right'].indexOf(data.placement.split(' ')[0]) !== -1;
    const len = isVertical ? 'height' : 'width';
    const sideCapitalized = isVertical ? 'Top' : 'Left';
    const side = sideCapitalized.toLowerCase();
    const altSide = isVertical ? 'left' : 'top';
    const opSide = isVertical ? 'bottom' : 'right';
    const arrowElementSize = getOuterSizes(arrowElement)[len];
    const placementVariation = data.placement.split(' ')[1];
    // top/left side
    if ((data.offsets.host[opSide] ?? 0) - arrowElementSize < (targetOffsets[side] ?? 0)) {
        (targetOffsets)[side] -=
            (targetOffsets[side] ?? 0) - ((data.offsets.host[opSide] ?? 0) - arrowElementSize);
    }
    // bottom/right side
    if (Number((data).offsets.host[side]) + Number(arrowElementSize) > (targetOffsets[opSide] ?? 0)) {
        (targetOffsets)[side] +=
            Number((data).offsets.host[side]) + Number(arrowElementSize) - Number((targetOffsets)[opSide]);
    }
    targetOffsets = getClientRect(targetOffsets);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    const css = getStyleComputedProperty(data.instance.target);
    const targetMarginSide = parseFloat(css[`margin${sideCapitalized}`]) || 0;
    const targetBorderSide = parseFloat(css[`border${sideCapitalized}Width`]) || 0;
    // compute center of the target
    let center;
    if (!placementVariation) {
        center = Number((data).offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    }
    else {
        const targetBorderRadius = parseFloat(css["borderRadius"]) || 0;
        const targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
        center = side === placementVariation ?
            Number((data).offsets.host[side]) + targetSideArrowOffset :
            Number((data).offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
    }
    let sideValue = center - (targetOffsets[side] ?? 0) - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - (arrowElementSize + 5), sideValue), 0);
    data.offsets.arrow = {
        [side]: Math.round(sideValue),
        [altSide]: '' // make sure to unset any eventual altSide value from the DOM node
    };
    data.instance.arrow = arrowElement;
    return data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcG9zaXRpb25pbmcvbW9kaWZpZXJzL2Fycm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2xGLE1BQU0sVUFBVSxLQUFLLENBQUMsSUFBVTtJQUM5QixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN4QywyREFBMkQ7SUFDM0QsTUFBTSxZQUFZLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV0Rix1REFBdUQ7SUFDdkQsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNqQixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFbEYsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM1QyxNQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3BELE1BQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQWdDLENBQUM7SUFDekUsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1QyxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxD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LHFCQUFxQixDQUFDLENBQUM7S0FDOUY7SUFFRCxJQUFJLFNBQVMsR0FDWCxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFFNUUsd0VBQXdFO0lBQ3hFLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUc7UUFDbkIsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUM3QixDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrRUFBa0U7S0FDakYsQ0FBQztJQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztJQUVuQyxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDbGllbnRSZWN0LCBnZXRPdXRlclNpemVzLCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFycm93KGRhdGE6IERhdGEpIHtcbiAgbGV0IHRhcmdldE9mZnNldHMgPSBkYXRhLm9mZnNldHMudGFyZ2V0O1xuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxuICBjb25zdCBhcnJvd0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRhdGEuaW5zdGFuY2UudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdycpO1xuXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBub3QgZm91bmQsIGRvbid0IHJ1biB0aGUgbW9kaWZpZXJcbiAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50LnNwbGl0KCcgJylbMF0pICE9PSAtMTtcblxuICBjb25zdCBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICBjb25zdCBzaWRlQ2FwaXRhbGl6ZWQgPSBpc1ZlcnRpY2FsID8gJ1RvcCcgOiAnTGVmdCc7XG4gIGNvbnN0IHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKSBhcyBrZXlvZiB0eXBlb2YgdGFyZ2V0T2Zmc2V0cztcbiAgY29uc3QgYWx0U2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3Qgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgY29uc3QgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xuICBjb25zdCBwbGFjZW1lbnRWYXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnICcpWzFdO1xuXG4gIC8vIHRvcC9sZWZ0IHNpZGVcbiAgaWYgKChkYXRhLm9mZnNldHMuaG9zdFtvcFNpZGVdID8/IDApIC0gYXJyb3dFbGVtZW50U2l6ZSA8ICh0YXJnZXRPZmZzZXRzW3NpZGVdID8/IDApKSB7XG4gICAgKHRhcmdldE9mZnNldHMpW3NpZGVdIC09XG4gICAgICAodGFyZ2V0T2Zmc2V0c1tzaWRlXSA/PyAwKSAtICgoZGF0YS5vZmZzZXRzLmhvc3Rbb3BTaWRlXSA/PyAwKSAtIGFycm93RWxlbWVudFNpemUpO1xuICB9XG4gIC8vIGJvdHRvbS9yaWdodCBzaWRlXG4gIGlmIChOdW1iZXIoKGRhdGEpLm9mZnNldHMuaG9zdFtzaWRlXSkgKyBOdW1iZXIoYXJyb3dFbGVtZW50U2l6ZSkgPiAodGFyZ2V0T2Zmc2V0c1tvcFNpZGVdID8/IDApKSB7XG4gICAgKHRhcmdldE9mZnNldHMpW3NpZGVdICs9XG4gICAgICBOdW1iZXIoKGRhdGEpLm9mZnNldHMuaG9zdFtzaWRlXSkgKyBOdW1iZXIoYXJyb3dFbGVtZW50U2l6ZSkgLSBOdW1iZXIoKHRhcmdldE9mZnNldHMpW29wU2lkZV0pO1xuICB9XG4gIHRhcmdldE9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHRhcmdldE9mZnNldHMpO1xuXG4gIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCB0YXJnZXQgb2Zmc2V0c1xuICAvLyB0YWtlIHRhcmdldCBtYXJnaW4gaW4gYWNjb3VudCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgdGhpcyBpbmZvIGF2YWlsYWJsZVxuICBjb25zdCBjc3MgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZGF0YS5pbnN0YW5jZS50YXJnZXQpIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgY29uc3QgdGFyZ2V0TWFyZ2luU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2BtYXJnaW4ke3NpZGVDYXBpdGFsaXplZH1gXSkgfHwgMDtcbiAgY29uc3QgdGFyZ2V0Qm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2Bib3JkZXIke3NpZGVDYXBpdGFsaXplZH1XaWR0aGBdKSB8fCAwO1xuXG4gIC8vIGNvbXB1dGUgY2VudGVyIG9mIHRoZSB0YXJnZXRcbiAgbGV0IGNlbnRlcjogbnVtYmVyO1xuICBpZiAoIXBsYWNlbWVudFZhcmlhdGlvbikge1xuICAgIGNlbnRlciA9IE51bWJlcigoZGF0YSkub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihkYXRhLm9mZnNldHMuaG9zdFtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0YXJnZXRCb3JkZXJSYWRpdXMgPSBwYXJzZUZsb2F0KGNzc1tcImJvcmRlclJhZGl1c1wiXSkgfHwgMDtcbiAgICBjb25zdCB0YXJnZXRTaWRlQXJyb3dPZmZzZXQgPSBOdW1iZXIodGFyZ2V0TWFyZ2luU2lkZSArIHRhcmdldEJvcmRlclNpZGUgKyB0YXJnZXRCb3JkZXJSYWRpdXMpO1xuICAgIGNlbnRlciA9IHNpZGUgPT09IHBsYWNlbWVudFZhcmlhdGlvbiA/XG4gICAgICBOdW1iZXIoKGRhdGEpLm9mZnNldHMuaG9zdFtzaWRlXSkgKyB0YXJnZXRTaWRlQXJyb3dPZmZzZXQgOlxuICAgICAgTnVtYmVyKChkYXRhKS5vZmZzZXRzLmhvc3Rbc2lkZV0pICsgTnVtYmVyKGRhdGEub2Zmc2V0cy5ob3N0W2xlbl0gLSB0YXJnZXRTaWRlQXJyb3dPZmZzZXQpO1xuICB9XG5cbiAgbGV0IHNpZGVWYWx1ZSA9XG4gICAgY2VudGVyIC0gKHRhcmdldE9mZnNldHNbc2lkZV0gPz8gMCkgLSB0YXJnZXRNYXJnaW5TaWRlIC0gdGFyZ2V0Qm9yZGVyU2lkZTtcblxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyB0YXJnZXRcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4odGFyZ2V0T2Zmc2V0c1tsZW5dIC0gKGFycm93RWxlbWVudFNpemUgKyA1KSwgc2lkZVZhbHVlKSwgMCk7XG4gIGRhdGEub2Zmc2V0cy5hcnJvdyA9IHtcbiAgICBbc2lkZV06IE1hdGgucm91bmQoc2lkZVZhbHVlKSxcbiAgICBbYWx0U2lkZV06ICcnIC8vIG1ha2Ugc3VyZSB0byB1bnNldCBhbnkgZXZlbnR1YWwgYWx0U2lkZSB2YWx1ZSBmcm9tIHRoZSBET00gbm9kZVxuICB9O1xuXG4gIGRhdGEuaW5zdGFuY2UuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iXX0=