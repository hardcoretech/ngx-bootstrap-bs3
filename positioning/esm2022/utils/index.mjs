export { computeAutoPlacement } from './computeAutoPlacement';
export { getBordersSize } from './getBordersSize';
export { getBoundaries } from './getBoundaries';
export { getBoundingClientRect } from './getBoundingClientRect';
export { getClientRect } from './getClientRect';
export { getOffsetParent } from './getOffsetParent';
export { getOffsetRectRelativeToArbitraryNode } from './getOffsetRectRelativeToArbitraryNode';
export { getOffsets } from './getOffsets';
export { getOppositePlacement } from './getOppositePlacement';
export { getOppositeVariation } from './getOppositeVariation';
export { getOuterSizes } from './getOuterSizes';
export { getParentNode } from './getParentNode';
export { getReferenceOffsets } from './getReferenceOffsets';
export { getScroll } from './getScroll';
export { getScrollParent } from './getScrollParent';
export { getStyleComputedProperty } from './getStyleComputedProperty';
export { getTargetOffsets } from './getTargetOffsets';
export { getWindowSizes } from './getWindowSizes';
export { isFixed } from './isFixed';
export { isModifierEnabled } from './isModifierEnabled';
export { isNumeric } from './isNumeric';
export { updateContainerClass } from './updateContainerClass';
export { setStyles } from './setStyles';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcG9zaXRpb25pbmcvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNwQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBjb21wdXRlQXV0b1BsYWNlbWVudCB9IGZyb20gJy4vY29tcHV0ZUF1dG9QbGFjZW1lbnQnO1xuZXhwb3J0IHsgZ2V0Qm9yZGVyc1NpemUgfSBmcm9tICcuL2dldEJvcmRlcnNTaXplJztcbmV4cG9ydCB7IGdldEJvdW5kYXJpZXMgfSBmcm9tICcuL2dldEJvdW5kYXJpZXMnO1xuZXhwb3J0IHsgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IH0gZnJvbSAnLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QnO1xuZXhwb3J0IHsgZ2V0Q2xpZW50UmVjdCB9IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XG5leHBvcnQgeyBnZXRPZmZzZXRQYXJlbnQgfSBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XG5leHBvcnQgeyBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgfSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5leHBvcnQgeyBnZXRPZmZzZXRzIH0gZnJvbSAnLi9nZXRPZmZzZXRzJztcbmV4cG9ydCB7IGdldE9wcG9zaXRlUGxhY2VtZW50IH0gZnJvbSAnLi9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5leHBvcnQgeyBnZXRPcHBvc2l0ZVZhcmlhdGlvbiB9IGZyb20gJy4vZ2V0T3Bwb3NpdGVWYXJpYXRpb24nO1xuZXhwb3J0IHsgZ2V0T3V0ZXJTaXplcyB9IGZyb20gJy4vZ2V0T3V0ZXJTaXplcyc7XG5leHBvcnQgeyBnZXRQYXJlbnROb2RlIH0gZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcbmV4cG9ydCB7IGdldFJlZmVyZW5jZU9mZnNldHMgfSBmcm9tICcuL2dldFJlZmVyZW5jZU9mZnNldHMnO1xuZXhwb3J0IHsgZ2V0U2Nyb2xsIH0gZnJvbSAnLi9nZXRTY3JvbGwnO1xuZXhwb3J0IHsgZ2V0U2Nyb2xsUGFyZW50IH0gZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xuZXhwb3J0IHsgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuZXhwb3J0IHsgZ2V0VGFyZ2V0T2Zmc2V0cyB9IGZyb20gJy4vZ2V0VGFyZ2V0T2Zmc2V0cyc7XG5leHBvcnQgeyBnZXRXaW5kb3dTaXplcyB9IGZyb20gJy4vZ2V0V2luZG93U2l6ZXMnO1xuZXhwb3J0IHsgaXNGaXhlZCB9IGZyb20gJy4vaXNGaXhlZCc7XG5leHBvcnQgeyBpc01vZGlmaWVyRW5hYmxlZCB9IGZyb20gJy4vaXNNb2RpZmllckVuYWJsZWQnO1xuZXhwb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi9pc051bWVyaWMnO1xuZXhwb3J0IHsgdXBkYXRlQ29udGFpbmVyQ2xhc3MgfSBmcm9tICcuL3VwZGF0ZUNvbnRhaW5lckNsYXNzJztcbmV4cG9ydCB7IHNldFN0eWxlcyB9IGZyb20gJy4vc2V0U3R5bGVzJztcbiJdfQ==