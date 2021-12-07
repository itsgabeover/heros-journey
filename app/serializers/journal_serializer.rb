class JournalSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :tags
end
