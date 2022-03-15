import type { NextPage } from "next";
import React, { useState } from "react";

export const calcTextAreaHeight = (value: string) => {
  const rowsNum = value.split("\n").length;
  if (rowsNum > 4) return 4;
  return rowsNum;
};

const Theme: NextPage = () => {
  const [text, setText] = useState("");

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex overflow-y-scroll flex-col gap-5 p-20 min-h-[100vh] bg-base-100">
      <div className="flex gap-2">
        <div className="p-8 bg-base-100 text-base-content">bg-base-100</div>
        <div className="p-8 bg-base-200 text-base-content">bg-base-200</div>
        <div className="p-8 bg-base-300 text-base-content">bg-base-300</div>
        <div className="p-8 bg-base-content text-base-100">bg-base-content</div>
        <div className="p-8 bg-primary text-base-content">bg-primary</div>
        <div className="p-8 bg-secondary text-base-content">bg-secondary</div>
        <div className="p-8 bg-accent text-base-content">bg-accent</div>
        <div className="p-8 bg-info text-base-content">bg-info</div>
        <div className="p-8 bg-error text-base-content">bg-error</div>
        <div className="p-8 bg-tertiary text-base-content">bg-tertiary</div>
      </div>

      <div>
        <p className="text-base-content">text-base-content</p>
        <p className="text-base-300">text-base-300</p>
        <p className="text-primary">text-primary</p>
        <p className="text-secondary">text-secondary</p>
        <p className="text-accent">text-accent</p>
        <p className="text-tertiary">text-tertiary</p>
      </div>

      <div>
        <p className="text-base-content text-2xs">text-2xs</p>
        <p className="text-xs text-base-content">text-xs</p>
        <p className="text-sm text-base-content">text-sm</p>
        <p className="text-base-content">text-base</p>
        <p className="text-lg text-base-content">text-lg</p>
        <p className="text-xl text-base-content">text-xl</p>
        <p className="text-2xl text-base-content">text-2xl</p>
        <p className="text-3xl text-base-content">text-3xl</p>
        <p className="text-4xl text-base-content">text-4xl</p>
        <p className="text-5xl text-base-content">text-5xl</p>
        <p className="text-6xl text-base-content">text-6xl</p>
        <p className="text-7xl text-base-content">text-7xl</p>
        <p className="text-8xl text-base-content">text-8xl</p>
        <p className="text-9xl text-base-content">text-9xl</p>
        <p className="text-tertiary">text-tertiary</p>
      </div>

      <div>
        <button className="btn btn-primary btn-xs">btn-xs</button>
        <button className="btn btn-primary btn-sm">btn-sm</button>
        <button className="btn btn-primary">btn-md</button>
        <button className="btn btn-primary btn-lg">btn-lg</button>
        <button className="btn btn-primary btn-wide">btn-wide</button>
      </div>

      <h1 className="text-xl text-base-content">Components</h1>

      <div>
        <input type="radio" name="radio-1" className="radio radio-primary" checked />
        <input type="radio" name="radio-1" className="radio radio-primary" />
        <input type="radio" name="radio-2" className="radio radio-secondary" checked />
        <input type="radio" name="radio-2" className="radio radio-secondary" />
        <input type="radio" name="radio-3" className="radio radio-accent" checked />
        <input type="radio" name="radio-3" className="radio radio-accent" />
        <input type="radio" name="radio-4" className="radio radio-tertiary" checked />
        <input type="radio" name="radio-4" className="radio radio-tertiary" />
      </div>

      <div className="flex gap-4 w-full">
        <button className="flex-1 btn btn-primary">今日する</button>
        <button className="flex-1 btn btn-secondary">明日する</button>
        <button className="flex-1 btn btn-accent">今度する</button>
        <button className="flex-1 btn btn-info">保存する</button>
        <button className="flex-1 btn btn-neutral">キャンセル</button>
        <button className="flex-1 text-white btn btn-error">OK</button>
        <button className="btn btn-tertiary">btn-tertiary</button>
      </div>

      <input type="input" className="w-full input input-bordered input-primary" placeholder="名前を変更" />

      <textarea
        name="tweetBody"
        className="textarea-primary"
        placeholder="入力フィールドは最大4行表示"
        value={text}
        rows={calcTextAreaHeight(text)}
        onChange={handleChangeText}
      />
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Theme;
