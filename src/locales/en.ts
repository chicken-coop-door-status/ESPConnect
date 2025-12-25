const en = {
  app: {
    title: 'ESPConnect',
    sectionsLabel: 'Sections',
    resourcesLabel: 'Resources',
  },
  navigation: {
    deviceInfo: 'Device Info',
    partitions: 'Partitions',
    apps: 'Apps',
    nvs: 'NVS Inspector',
    spiffs: 'SPIFFS Tools',
    littlefs: 'LittleFS Tools',
    fatfs: 'FATFS Tools',
    flash: 'Flash Tools',
    console: 'Serial Monitor',
    log: 'Session Log',
    about: 'About',
  },
  resources: {
    tutorial: 'Tutorial',
    buyCoffee: 'Buy Me a Coffee',
    getHelp: 'Get Help',
  },
  actions: {
    connect: 'Connect',
    disconnect: 'Disconnect',
  },
  forms: {
    baudRate: 'Baud rate',
  },
  tooltips: {
    higherBaud: 'A higher baudrate can be used',
  },
  alerts: {
    browserUnsupported:
      'This browser does not support the Web Serial API. Use Chrome, Edge, or another Chromium-based browser.',
    serialMonitorClosed: 'Serial monitor closed - click Connect to re-enter maintenance mode.',
  },
  dialogs: {
    connecting: 'Connecting',
    littlefsBackup: 'LittleFS Backup',
    littlefsLoading: 'Loading LittleFS',
    littlefsSaving: 'Saving LittleFS',
    preparingBackup: 'Preparing backup...',
    writingLittlefs: 'Writing LittleFS image...',
    littlefsRestoring: 'Restoring LittleFS',
    fatfsBackup: 'FATFS Backup',
    cancel: 'Cancel',
    confirm: 'Confirm',
    continue: 'Continue',
    confirmationTitle: 'Please confirm',
  },
  disconnected: {
    defaultTitle: 'No device connected',
    defaultSubtitle: 'Connect to an ESP32 to continue.',
    deviceInfo: 'Connect to an ESP32 to see device information.',
    nvs: 'Connect to an ESP32 with an NVS partition to inspect stored key/value pairs.',
    spiffs: 'Connect to an ESP32 to browse and edit SPIFFS files.',
    littlefs: 'Connect to an ESP32 with a LittleFS partition to use these tools.',
    fatfs: 'Connect to an ESP32 with a FATFS partition to use these tools.',
    apps: 'Connect to a device to inspect OTA application slots.',
    flash: 'Connect to your board to flash firmware or inspect registers.',
  },
  deviceInfo: {
    summary: {
      flashClock: 'Flash & Clock',
      featureSet: 'Feature Set',
      capabilities: '{count} capabilities',
      noFeatures: 'No features reported',
      more: '+{count} more',
      noOptionalCapabilities: 'No optional capabilities.',
    },
    crystal: 'Crystal {crystal}',
    unknown: 'Unknown',
  },
  about: {
    title: 'About ESPConnect',
    description: {
      intro:
        'ESPConnect is a browser-based toolkit for ESP32 devices. It brings common maintenance tasks together so you can connect, inspect and update your board without installing desktop utilities.',
      details:
        'The application talks to the device over the Web Serial API, then exposes high-level tools for firmware flashing, partition management, filesystem editing, backup/restore workflows, as well as a session log and serial monitor for troubleshooting. It is based on',
      reference: 'WebSerial ESPTool',
    },
    filesystems: {
      title: 'Filesystem Tools',
      spiFFS: {
        label: 'SPIFFS',
        description: 'TypeScript emulator for staging changes locally before writing flash.',
      },
      littleFS: {
        label: 'LittleFS',
        description: 'Backed by the littlefs-wasm module for true storage parity.',
      },
      fatFS: {
        label: 'FATFS',
        description: 'New wasm-powered tooling for FAT partitions, mirroring your device layout.',
      },
      summary:
        'Drag-and-drop uploads, preview/listen for common file types, diff summaries, and mandatory backups before saving keep the workflow safe.',
    },
    firmware: {
      title: 'Firmware & Maintenance',
      flash: 'Flash custom binaries with progress tracking, presets, and safety prompts.',
      inspect: 'Inspect partition tables, OTA slots, device descriptors, and flash usage at a glance.',
      monitor: 'Serial monitor with command shortcuts and session logging for troubleshooting.',
    },
    safety: {
      title: 'Safety-first Workflow',
      body:
        'Every destructive action is gated behind confirmation prompts and recent backups. ESPConnect keeps staged changes in-memory until you explicitly write them to flash, making it easy to review modifications or revert by re-reading the partition.',
    },
    privacy: {
      title: 'Privacy & Security',
      body:
        'ESPConnect runs fully in your browser -- there is no backend, account, or telemetry. Firmware files, backups, and diagnostics stay local and only move when you download them yourself. Always flash firmware from trusted sources.',
    },
  },
  apps: {
    alerts: {
      readingMetadata: 'Reading application metadata…',
      noApplications: 'No application partitions detected.',
    },
    chips: {
      active: 'Active',
      invalid: 'Encrypted/Invalid',
    },
    subtitle: 'Offset {offset} ? Size {size}',
    details: {
      project: 'Project',
      version: 'Version',
      built: 'Built',
      core: 'IDF / Core',
      entry: 'Entry address',
      segments: 'Segments',
    },
    descriptorMissing: 'Application descriptor not found in first 64 KB.',
    invalidImage: 'Encrypted or invalid image header.',
    unknown: 'Unknown',
  },
  flashFirmware: {
    warning:
      'Firmware tools are intended for advanced users. Writing or erasing flash can permanently remove data or render the microcontroller unbootable. Double-check settings before proceeding.',
    backup: {
      title: 'Flash Backup & Erase',
      partitionLabel: 'Partition',
      downloadSelectedPartition: 'Download Selected Partition',
      downloadAllPartitions: 'Download All Partitions',
      downloadFlashBackup: 'Download Flash Backup',
      startOffset: 'Start offset',
      lengthBytes: 'Length (bytes)',
      downloadRegion: 'Download Flash Region',
      eraseEntireFlash: 'Erase Entire Flash',
    },
    firmware: {
      title: 'Flash Firmware',
      binaryLabel: 'Firmware binary (.bin)',
      flashOffset: 'Flash offset',
      recommendedOffsets: 'Recommended offsets',
      eraseBeforeFlash: 'Erase entire flash before writing',
      hint:
        'Flashing runs at 921,600 bps by default. Drop the baud if the device struggles to sync. The serial monitor automatically switches to 115,200 bps for stability.',
      flashButton: 'Flash Firmware',
    },
    registerAccess: {
      title: 'Register Access',
      quickSelectLabel: 'Quick-select register',
      registerAddress: 'Register address',
      valueLabel: 'Value',
      readButton: 'Read Register',
      writeButton: 'Write Register',
      referenceLink: 'View register reference',
      technicalReferenceLink: 'Open technical reference',
      lastReadValue: 'Last read value:',
    },
    integrity: {
      title: 'Flash Integrity',
      partitionLabel: 'Partition',
      helper: 'Selecting a partition will auto-fill the offset and length fields below.',
      startOffset: 'Start offset',
      lengthBytes: 'Length (bytes)',
      computeButton: 'Compute MD5',
      md5Label: 'MD5 checksum:',
    },
    progress: {
      flashTitle: 'Flash in progress',
      downloadTitle: 'Flash download in progress',
      preparingFlash: 'Preparing flash...',
      preparingDownload: 'Preparing download...',
      stop: 'Stop',
    },
  },
  language: {
    english: 'English',
    chinese: '简体中文',
    switchTo: 'Switch to {language}',
  },
  theme: {
    light: 'light',
    dark: 'dark',
    switch: 'Switch to {theme} theme',
  },
  status: {
    connected: 'Connected',
    disconnected: 'Disconnected',
    preparingBackup: 'Preparing backup...',
    writingLittlefs: 'Writing LittleFS image...',
  },
};

export default en;
