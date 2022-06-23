import {Link} from '@shopify/hydrogen';

export default function Home() {
  return <DemosMenu />;
}

function DemosMenu() {
  return (
    <div>
      <h1>react-three-fiber x Hydrogen demos</h1>
      <ol>
        {[
          {component: 'Animation', name: 'Animation', handle: 'animation'},
          {
            component: 'AutoDispose',
            name: 'Auto Dispose',
            handle: 'auto-dispose',
          },
          {
            component: 'ClickAndHover',
            name: 'Click and Hover',
            handle: 'click-and-hover',
          },
          {
            component: 'ContextMenuOverride',
            name: 'Context Menu Override',
            handle: 'context-menu-override',
          },
          {component: 'Gestures', name: 'Gestures', handle: 'gestures'},
          {component: 'Gltf', name: 'Gltf', handle: 'gltf'},
          {component: 'Inject', name: 'Inject', handle: 'inject'},
          {component: 'Layers', name: 'Layers', handle: 'layers'},
          {component: 'Lines', name: 'Lines', handle: 'lines'},
          {
            component: 'MultiMaterial',
            name: 'Multi Material',
            handle: 'multi-material',
          },
          {
            component: 'MultiRender',
            name: 'Multi Render',
            handle: 'multi-render',
          },
          {component: 'MultiView', name: 'Multi View', handle: 'multi-view'},
          {component: 'Pointcloud', name: 'Pointcloud', handle: 'pointcloud'},
          {component: 'Portals', name: 'Portals', handle: 'portals'},
          {
            component: 'Reparenting',
            name: 'Reparenting',
            handle: 'reparenting',
          },
          {component: 'ResetProps', name: 'ResetProps', handle: 'reset-props'},
          {component: 'Selection', name: 'Selection', handle: 'selection'},
          {
            component: 'StopPropagation',
            name: 'Stop Propagation',
            handle: 'stop-propagation',
          },
          {
            component: 'SuspenseAndErrors',
            name: 'Suspense and Errors',
            handle: 'suspense-and-errors',
          },
          {
            component: 'SuspenseMaterial',
            name: 'Suspense Material',
            handle: 'suspense-material',
          },
          {
            component: 'SVGRenderer',
            name: 'SVG Renderer',
            handle: 'svg-renderer',
          },
          {component: 'Test', name: 'Test', handle: 'test'},
          {component: 'Viewcube', name: 'Viewcube', handle: 'viewcube'},
          {
            component: 'ViewTracking',
            name: 'View Tracking',
            handle: 'view-tracking',
          },
        ].map(({handle, name}) => {
          return (
            <li key={handle}>
              <Link to={`/${handle}`}>{name}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
