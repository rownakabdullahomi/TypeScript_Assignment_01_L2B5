# TypeScript Essentials Handbook 📘

![TypeScript Logo](https://cdn.worldvectorlogo.com/logos/typescript.svg)

A comprehensive guide to key TypeScript concepts every developer should know. This README explains fundamental TypeScript features with clear examples and best practices.

## Table of Contents 📋
- [Interfaces vs Types](#-interfaces-vs-types-in-typescript)
- [The keyof Keyword](#-the-keyof-keyword)
- [Special Types: any, unknown, never](#-special-types-any-unknown-never)
- [Enums](#-enums-in-typescript)
- [Type Inference](#-type-inference-in-typescript)
- [Benefits of TypeScript](#-how-typescript-improves-code-quality)
- [Union & Intersection Types](#-union--intersection-types)

## 🔹 Interfaces vs Types in TypeScript

Both define object shapes but have important differences:

| Feature          | `interface`                          | `type`                              |
|------------------|--------------------------------------|-------------------------------------|
| Extensibility    | Can be extended (`extends`)          | Uses intersection (`&`)             |
| Declaration     | Supports merging                    | Cannot be re-declared               |
| Use Cases       | Better for object shapes            | More flexible (unions, tuples etc.) |

**Example:**
```typescript
// Interface
interface User {
  id: number;
  name: string;
}

// Type
type Point = {
  x: number;
  y: number;
};