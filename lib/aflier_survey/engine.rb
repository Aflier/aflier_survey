module AflierSurvey
  class Engine < ::Rails::Engine
    isolate_namespace AflierSurvey

    initializer 'webpacker.proxy' do |app|
      insert_middleware = MyEngine.webpacker.config.dev_server.present? rescue nil
      next unless insert_middleware

      app.middleware.insert_before(
        0, Webpacker::DevServerProxy, # 'Webpacker::DevServerProxy' if Rails version < 5
        ssl_verify_none: true,
        webpacker: MyEngine.webpacker
      )

      app.middleware.insert_before(
        0, Rack::Static,
        urls: ['/my-engine-packs'], root: MyEngine::Engine.root.join('public').to_s
      )
    end
  end
end
