import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  return (
    <div className=" z-50 px-2 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div className="flex z-50">
        <div className=" w-8 h-4 flex justify-center text-black items-center bg-white">
          {data}
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-black">{data.job}</div>
        </div>
      </div>

      {/* <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" /> */}
    </div>
  );
}

export default memo(CustomNode);
