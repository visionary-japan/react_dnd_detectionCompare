(module
 (type $0 (func (param i32 i32) (result i32)))
 (type $1 (func (param i32) (result i32)))
 (memory $0 0)
 (export "add" (func $assembly/index/add))
 (export "fibonacci" (func $assembly/index/fibonacci))
 (export "memory" (memory $0))
 (func $assembly/index/add (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
 )
 (func $assembly/index/fibonacci (param $0 i32) (result i32)
  local.get $0
  i32.const 1
  i32.le_s
  if
   local.get $0
   return
  end
  local.get $0
  i32.const 1
  i32.sub
  call $assembly/index/fibonacci
  local.get $0
  i32.const 2
  i32.sub
  call $assembly/index/fibonacci
  i32.add
 )
)
