

  ```
  [Initial Render]                            [Button Clicks]
        |                                            |
        |                                            |
    useState()                                     handleStartStop()
    |   |   |                                       |
    v   v   v                                       v
  time = 0   isRunning = false              (toggles isRunning)
        |                                            |
        |                                     update State setIsRunning()
        |                                            |
        |                                            |
        |                        Trigger re-render (recalculates display)--<--+
        |                                            |                        |
        v                                            v                        |
        v                                      isRunning changed?             |
        |                                            |                        |
        |                           +-------------------------------+         |
        |                           |                               |         |
        +---------------------------+                               |         |
                            |                                       v         |
                            v                                       |         |
                        useEffect()                                 |         ^
                            |                                       |         |
                      (cleanup function)                            |         |
                      return clearInterval(interval)                |         |
                            |                                       |         |
                            v                                       |         |
                          mount                                     |         |         
                            |                                       |         |   
                      initialise interval                           |         |
                            |                                       |         |
                  isRunning ? true : false                          |         ^
                            |                                       |         |
        +--------------------------------------------+              |         |
        |                                            |              |         |           
      false                                        true             |         |           
        |                                            |              |         |          
        v                                            |              |         |
        |                                      setInterval          |         |
        |                                            |              |         |
        |             update state time +1 after every interval     |         |
        |                                            |              |         |
        |                                trigger re-render          v         |
        |                                            |              |         |
        |                                            +------>-------(------>--+
        |                                                           |
        v                                                           |
       unmount                                                      v
        |                                                           |
       --------->-----------------------------<---------------------+
                                   |
                                   v
                               formatTime()
                                   |
                             Format time to 'hh:mm'
                                   |
                             Display time in UI
                                   |
                             Return JSX (rendered UI)
```