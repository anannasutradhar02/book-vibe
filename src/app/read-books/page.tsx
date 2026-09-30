"use client";
import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis, LabelList } from 'recharts';
import { BooksContext } from '@/context/BooksContext';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}Z`;
};

const TriangleBar = (props: any) => {
  const { x, y, width, height, index } = props;
  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: 'stroke-width 0.3s ease-out',
      }}
    />
  );
};

const CustomColorLabel = (props: any) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <text {...props} fill={fill} textAnchor="middle">{props.value}</text>;
};

const ReadBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    return (
      <div className="p-10 text-center">
        Loading or BooksProvider missing...
      </div>
    );
  }

  const { readBooks = [] } = context;

  const chartData = readBooks.map((book: any) => ({
    name: book.bookName,
    uv: book.totalPages,
  }));

  return (
    <div className="container mx-auto my-5 flex flex-col items-center">
      {chartData.length > 0 ? (
        <BarChart
          style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip cursor={{ fillOpacity: 0.5 }} />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" shape={<TriangleBar />}>
            <LabelList content={<CustomColorLabel />} position="top" />
          </Bar>
        </BarChart>
      ) : (
        <p className="text-center text-gray-500 py-10">No read books to display</p>
      )}
    </div>
  );
};

export default ReadBooks;